import Content from "./Content";
import Navbar from "./Navbar";
import image1 from '../Images/pexels-computer-image.jpg';
import Footer from "./Footer";

const Home = ()=>{
    return(
       <div className="container">
        <Navbar/>
        <div className="title">
      <h2>We are building the future Lorem Ipsum</h2>
      </div>  
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/>
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/>
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/> 
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/>
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/>
      <Content img={image1} heading="Cyber Gaurd" info="Here we can write the information."/>                                 
      <Footer/>  
       </div>
    );
}
export default Home;