import React from "react";
// import StickyVideo from 'react-sticky-video';
// import 'react-sticky-video/dist/index.css';

// import CorporateVideo from '../components/video/CorporateVideo.mp4';
// import VideoPop from 'react-video-pop';
// import { Translate } from "@material-ui/icons";
// import { MdKeyboardArrowDown} from 'react-icons/md';

// import { IconContext } from 'react-icons/lib';
import './VedioSection.css'
// import { Link } from 'react-scroll';
// import Sticky from 'react-sticky-el';
function VedioSection() {

    // const prevScrollY = useRef(0);

    // 
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentScrollY = window.scrollY;
    //     const target = document.getElementsByClassName('smallWindow');
      
    //     if (prevScrollY.current > currentScrollY && !goingUp) {
    //       setGoingUp(true);

    //     }
  
    //     prevScrollY.current = currentScrollY;
    //     console.log(goingUp, currentScrollY);
    //     if(currentScrollY>1000){
    //       target[0].style.display = "block"; 
    //       console.log("working")
    //     }else if(currentScrollY<999){
    //       target[0].style.display = "none"; 
    //       console.log(" n working")
    //     }


    //   };
  
    //   window.addEventListener("scroll", handleScroll, { passive: true });
  
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, [goingUp]);
  


    return (
        <>
            
        {/* <div className="smallWindow"
            style={{
           }}>
                <video className="smallVideo"          
                  autoPlay
                  loop
                  muted >
                  <source src={CorporateVideo} type="video/mp4"/>
               </video>
        </div> */}
        {/* <div className="largeWindow">  */}


                {/* <video className="largeVideo"
                    > */}
                    {/* <source src={CorporateVideo} type="video/mp4"/> */}
                  {/* </video>  */}
               
         {/* </div> */}
        {/* <div className="largeWindow">  */}
        {/* <Sticky> */}
        <div class="resp-container">
        <iframe  class="resp-iframe"  src="https://www.youtube.com/embed/2p9sIugbIwo?autoplay=1&mute=1&rel=0&controls=0&fs=0&loop=1&color=white&playlist=2p9sIugbIwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
       </div>  
       {/* </Sticky> */}
        {/* </div> */}
    </>

    )
}

export default VedioSection
