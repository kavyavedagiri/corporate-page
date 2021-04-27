import React,{useEffect,useRef,useState} from 'react';
import './App.css';
import './sticky.css'
import Home from './components/pages/HomePage/Home';
import Pricing from './components/pages/Pricing/Pricing';
import Features from './components/pages/Features/Features';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/Navbar';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Testimonial from './components/Testimonials/TestimonialSection'
import VedioSection from './components/VedioSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/pages/Footer.js/Footer';


import Aos from 'aos';
import "aos/dist/aos.css";


import './index.css'


function App() {



  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);
  const [width, setWidth]   = useState(window.innerWidth);
  const [largeScreen,setLargeScreen] = useState(true)
  useEffect(() => {

    const updateDimensions = () => {
      setWidth(window.innerWidth);
     
    }
   
  // console.log("up"+goingUp+"ls"+largeScreen)
 

    const handleScroll = () => {
    const currentScrollY = window.scrollY;

      if (prevScrollY.current >=currentScrollY ) {
        
        setGoingUp(true);
       
      }else if(prevScrollY.current <currentScrollY ){
      
        setGoingUp(false);
      }
      if(width>540){
        setLargeScreen(true);
        
      }else{
        setLargeScreen(false);
      }
      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateDimensions);
   
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
     

  }

  }, [goingUp,largeScreen,width]);

  


useEffect(()=>{
  Aos.init({duration:1000});
},[]);
  return (
  <>
   
 <ScrollToTop/>
<Router>

     
      <Navbar />
       </Router>
      <div className="outer">
      <div className="box" id={goingUp || largeScreen?"one-down":"one"}>
      <VedioSection/>
      </div> 
    
      
        <Home/>
        <Features/> 
        <Testimonial/> 
        <Pricing />   
        <ContactUs />
        <Footer/>   
    
      
</div>



    </>
  );
}

export default App;