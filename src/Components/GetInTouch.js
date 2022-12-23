import React ,{useState} from 'react';
import Navbar from './Navbar';

const GetIntTouch =(props)=>{
    const [text,setText]=useState({
         fullName:'',
          mobNumber:'',
          email:'',
          message:'',
        });
    const handleChange=(event)=>{
       setText(event.target.value);
    }

    return(
        <div>
          <div className="container">  <Navbar/></div>
        <div className="form-container">
            <form>
            <h1>Get In Touch</h1>
            <div >
            <label className="label">Full name:    </label>
            <input type="text" value={text.fullName} className="form-control" onChange={handleChange}/>

            <label className="label">Mob no.:</label>
            <input type="text" value={text.mobNumber} className="form-control" onChange={handleChange}/>
            </div>
            <div >
            <label className='label'>Email: </label>
            <input type="text"  value={text.email} className="form-control email" onChange={handleChange}/>
            </div>
            <div className='message'>
            <label className='label'>Message: </label>
            <textarea type="text" value={text.message} rows="5"></textarea>
            </div>
            <div className='btn-div'> 
            <button className='btn' type="submit">Submit</button>
            </div>
            </form>
        </div>
        </div>
    );
}

export default GetIntTouch;