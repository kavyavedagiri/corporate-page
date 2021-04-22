import React,{useEffect} from 'react';
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
useEffect(()=>{
  Aos.init({duration:2000});
},[]);
  return (
  <>
<Router>
      <ScrollToTop/>
      <Navbar />
   </Router>
<div class="outer">
        <Router>
        <Home data-aos="fade-up"/>
        <Features/>
        <Testimonial/>
        <Pricing />
        <ContactUs />
        <Footer/>
        </Router>
  <div class="box" id="one">
  <VedioSection/>
 </div>
</div>



    </>
  );
}

export default App;