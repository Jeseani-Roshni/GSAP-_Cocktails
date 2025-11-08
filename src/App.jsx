import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
// immport Navbar from './Components/Navbar.jsx'
import  Navbar  from "./Components/Navbar";
import Hero from './Components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 

  return (
    <>
     <main>
    <video 
        src='/video/input.mp4'
        // ref={videoRef}
        muted
        playsInline
        preload='auto'/>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black"/>
     </main>
    </>
  );
};

export default App;
