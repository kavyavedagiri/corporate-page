import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';


import "aos/dist/aos.css";

function Home() {
  return (
    <div  id="homePg">
      {/* <div className="mobile-home"></div> */}
      <MainSection style={{backgroundColor:"pink"}} {...homeObjOne} />
      <MainSection {...homeObjThree} />
      <MainSection {...homeObjTwo} />
    
    </div>
  );
}

export default Home;