import React from "react";
import cupAnimation from "../assets/animation/cup-noodles.json";
import Lottie from "react-lottie";


const Header_home = () => {
  return (
    <section_spot>
    <Cup/>
    </section_spot>
  );
};
/* const Spot_home = () => {
    return(
          
      <div className="container-img img_home">  
        <img src={chocho_spot} class="chocho_spot" alt="Your restaurant in 2 steps"/>
      </div>          
    );
}; */

const Cup = () => {
  return (
    <div className="container-fluid food-lottie">
     <Lottie 
      options = {{
          loop:true,
          renderer:'svg',
          isMobile:true,
          autoplay:true,
          reverse: true,
          animationData:cupAnimation,
          rendererSettings: {
          preserveAspectRatio:'xSmlYSml slice'
          },
        }}
        
        width={345}
        height={345}
      />
    </div>
    
  );
};


export default Header_home;


