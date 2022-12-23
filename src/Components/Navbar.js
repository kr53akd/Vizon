import Logo from '../Images/Logo-Image-removebg.png';
import { Link } from "react-router-dom";
import hamburger from '../Images/hamburgerImage.png'
import { useState } from 'react';

const Navbar =(props)=>{
    const [value,setValue]=useState('ON');
    const handleData=()=>{
           if(value==='ON')
           {
            document.getElementById("targetdata").style.display="none";
            setValue('OFF');
           }
           else 
           {
            document.getElementById("targetdata").style.cssText="height:95vh; width:100vw; display:flex; flexDirection:column; alignItems:center; justifyContent:center;";
            setValue('ON');
           }
        }
    return(
        <div className="row heading">
            <div className="logo">
             <Link to="/"><img src={Logo} alt="logo"/></Link>
             <span id="hamburger"><img src={hamburger} alt="hamburger" onClick={handleData}/></span>
            </div>
             <ul id="targetdata">
                <li><Link to="/" className="link">Home</Link></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Club</a></li>
                <li><Link to="/help">get in touch</Link></li>
            </ul>           
          </div>
    );
}

export default Navbar;