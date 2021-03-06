import React, { useState,useEffect,useRef } from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';



function Navbar() {

  

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

  






  const [click, setClick] = useState(false);
 const [prevent, setPrevent] = useState(true);

  const handleClick = () => {
    setClick(!click)
    // preventScroll()
    
  };
  const preventScroll=()=>{
    if(prevent===true){
     document.body.style.overflow = "hidden";
    console.log("yes")
    }else if(prevent===false) {
    document.body.style.overflow = "auto";
    console.log("no")
    }
  }
  
  const closeMobileMenu = () => {
    setClick(false)
    setPrevent(false) 
    preventScroll()
  };


const preventScrollClose=()=>{
  
 setPrevent(true) 
   preventScroll()

}

const preventScrollBar=()=>{
 setPrevent(false) 
    preventScroll()
 }

  return (
    <>
    
      <IconContext.Provider value={{ color: '#808080' }}>
        <nav className={goingUp || largeScreen ?'navbar-down':'navbar'}>
          <div className='navbar-container container'>
          <Link className='navbar-logo' onClick={closeMobileMenu} activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
            {/* <Link to='about' className='navbar-logo' onClick={closeMobileMenu} href={"homePg"}> */}
             {/* ----------------------------------insert your logo -------------------------------------------------*/}
              <img src="images/ndot2.svg" alt="logo" width="100" height="60"/>
             </Link> 
            <div className='menu-icon'  onClick={handleClick} >
            
              {click ? <div onClick={preventScrollClose}><FaTimes /></div> : <div onClick={preventScrollBar} > <FaBars /></div>}
            </div>
            <ul className={click ? 'nav-menu active'  : 'nav-menu'}>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='about' className='nav-links' onClick={closeMobileMenu}> */}
                  Home
                 </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="featurePg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='features' className='nav-links' onClick={closeMobileMenu}> */}
                  Features
              </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="pricingPg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='pricing' className='nav-links'  onClick={closeMobileMenu} > */}
                  Pricing
                 </Link> 
              </li>
              <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu} activeClass="active" to="contactusPg" spy={true} smooth={true} duration={1000}>
                {/* <Link to='contactus' className='nav-links' onClick={closeMobileMenu}> */}
                  Contact Us
               </Link> 
              </li>
             
            </ul>
          </div>
        </nav>
        
      </IconContext.Provider>
    </>
  );
}

export default Navbar;