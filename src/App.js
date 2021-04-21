import React,{useState} from 'react';
import './App.css';
import './sticky.css'
import Home from './components/pages/HomePage/Home';
import Pricing from './components/pages/Pricing/Pricing';
import Features from './components/pages/Features/Features';
import { BrowserRouter as Router} from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane'
import Navbar from './components/Navbar';
import ContactUs from './components/pages/Footer.js/Footer';
import Testimonial from './components/Testimonials/TestimonialSection'
import VedioSection from './components/VedioSection';
import ScrollToTop from './components/ScrollToTop';
import { CgDockLeft,CgViewSplit } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
// import { Button } from './Button';
import Button from '@material-ui/core/Button';









function App() {
  // const classes = useStyles();
  const [count, setCount] = useState("50%");
  // const rightRef = useRef(null);
// const [wrapSmallVal, setWrapSmallVal] = useState("true")

  return (
  <>
  <Router>
    <ScrollToTop/>
       <Navbar />
       <div style={{display:"flex",position:'fixed',zIndex:99, left: "50%", marginLeft:"-96px",opacity:"100%"}}>
    <IconContext.Provider value={{ color: '#ababab' ,size:24}}>
      <Button  onClick={() => setCount("30%")}>
        <CgDockLeft/>         
      </Button>
      <Button  onClick={() =>{ setCount("50%")}}>
        <CgViewSplit/>        
      </Button>
      <Button  onClick={() => {setCount("70%")} }>
        <CgDockLeft/>         
      </Button>
      </IconContext.Provider>

  </div>
  </Router>

  
  <SplitPane split="vertical">
    <Pane initialSize={count} minSize="30%" maxSize="70%" style={{position:"fixed"}}>

     {/* <div className="division1" >  
 <div className="sticky">   */}


<VedioSection/>

       
  
      {/* </div></div> */}
    </Pane>
    <Pane>
      {/* <Switch>
        <Route path='/' exact component={Home} /> */}
      {/* </Switch> */}
        <Home/>
        <Features/>
        <Testimonial/>
        <Pricing />
        <ContactUs />
    </Pane>
     </SplitPane>
  {/* </Router> */}
    </>
  );
}

export default App;