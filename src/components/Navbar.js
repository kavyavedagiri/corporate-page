import React, { useState,useEffect,useRef,useLayoutEffect } from 'react';

import { Link } from 'react-scroll';
import './Navbar.css';
import { MdDashboard  } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
    const currentScrollY = window.scrollY;
      if (prevScrollY.current >=currentScrollY ) {
        
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

  






  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
  };
  const closeMobileMenu = () => {
    setClick(false)
    document.body.style.overflow = "auto";
  
  };

 





  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={goingUp?'navbar-down':'navbar'}>
          <div className='navbar-container container'>
          <Link className='navbar-logo' onClick={closeMobileMenu} activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
            {/* <Link to='about' className='navbar-logo' onClick={closeMobileMenu} href={"homePg"}> */}
              <MdDashboard className='navbar-icon' />
              LOGO
             </Link> 
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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