import React from "react";
import oBento from "../assets/animation/obento.json";
import Lottie from "react-lottie";

const Footer_end = () => {
    return (
    <>
      <Obento/>
      <Footer/>
    </>
    );
  };
   const Footer = () => {
      return(    
        <div className="container-fluid container-footer">  
          <a href="https://www.lexdo.it/modello/privacy-policy-sito-web-app/?utm_source=google&utm_medium=cpc&utm_campaign=[S]_Contratti_TOP-CPA&utm_adgroup=Informativa_Privacy_|_Informativa_Privacy_[Broad]&utm_term=privacy%20policy&utm_content=548949862265&gclid=CjwKCAiA_omPBhBBEiwAcg7smd1wYEFDAv4-kR8anX1wGLvpKNO3wzpeku8xJrBDeJ8LYt8AaO79LRoCO2gQAvD_BwE"><p className="copyright" style={{textAlign:'center',}}>Privacy Policy Copyright © 2022 Chô</p></a>
        </div>          
      );
  };
  
  const Obento = () => {
    return (
      <div className="container-fluid obento-lottie">
       <Lottie 
        options = {{
            loop:true,
            renderer:'svg',
            isMobile:true,
            autoplay:true,
            reverse: true,
            animationData:oBento,
            rendererSettings: {
            preserveAspectRatio:"xMidYMid slice",
            },
          }}
          
          width={200}
          height={200}
        />
      </div>
      
    );
  };
  
  
  export default Footer_end;