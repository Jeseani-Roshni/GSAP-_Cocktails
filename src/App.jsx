import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 

  return (
    <>
      <h1 className=" flex-center h-[100vh]">
       Hello GSAP and Tailwind
      </h1>
    </>
  );
};

export default App;
