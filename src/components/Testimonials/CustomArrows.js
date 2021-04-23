
import * as React from "react";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import './Testimonial.css';
import { IconContext } from 'react-icons/lib';

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        
        display:"flex",
        
        justifyContent:"center",
        // paddingLeft:"-50px",
        //padding:-50,
        //  paddingRight:"50px",
        width:"100%",
        zIndex:9,

        transform: "translate(-25px, -135px)",
       }}> 
        <IconContext.Provider value={{ color: 'white', size : "50" }}>  
        < MdKeyboardArrowLeft onClick={next}/>
  
        <div style = {{width: "100%"}}> </div>
        <MdKeyboardArrowRight className="buttonRight" onClick={previous}/>
       {/* <button onClick={previous}>Prev</button> 
      <button onClick={next}>Next</button> */}
      </IconContext.Provider>
    </div>
  );
};

export default CustomButtonGroupAsArrows
