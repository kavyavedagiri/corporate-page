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

  useEffect(() => {
    const handleScroll = () => {
    const currentScrollY = window.scrollY;
      if (prevScrollY.current >currentScrollY) {
        
        setGoingUp(true);

      }else{
      
        setGoingUp(false);
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);


useEffect(()=>{
  Aos.init({duration:1000});
},[]);
  return (
  <>

<Router>
      <ScrollToTop/>
      <Navbar />
       </Router>
      <div className="outer">
      <div className="box" id={goingUp?"one":"one-down"}>
      <VedioSection/>
      </div> 
      
      <Router>
        <Home/>
        <Features/> 
        <Testimonial/> 
        <Pricing />   
        <ContactUs />
        <Footer/>   
      </Router>    
</div>



    </>
  );
}

export default App;