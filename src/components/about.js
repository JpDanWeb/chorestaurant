import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons'; 



function CardAbout  () {
     return (     
    <div className="abot-story" id='about-us' style={{width:'100%',}}>
        <h1 className="about-title" name="story" style={{margin:'0 auto',}}>Our Story  <FontAwesomeIcon className="ico-about" icon={faMicrophoneAlt} style={{marginLeft:'20px',}}/></h1>
        <div className="jumbotron jumbotron-fluid about-img">
            <div className="container">
                 <p className="about-text">Born in 1978, we are a small but resistant reality in Japanese catering. For 43 years now our family has continued to bring traditional Japanese cuisine to the top and perfect, with quality grafts from all over the world, to discover new flavors without ever giving up the taste and the exceptional experience that has continued to let us be among the best known restaurants in Tokyo. From quality fish selected by the expert Jigo, to quality meat carefully controlled by grandmother Akane, we create dishes and delicacies within the reach of natives but also new novices who want to get closer to Japanese food culture in the city.</p>
            </div>
        </div>
    </div>
     );
 };


 export default CardAbout;