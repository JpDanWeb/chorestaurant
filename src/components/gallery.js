import React from "react";
import yakisoba from '../assets/image/yakisoba.jpg';
import raimien from '../assets/image/raimen.jpg';
import tonkatsucurry from '../assets/image/tonkatsucurry.jpg';
import gyoza from '../assets/image/gyoza.jpg';
import kobebemeat from '../assets/image/kkobe_meat.jpg';
import mochi from '../assets/image/mochi_sakura.jpg';
import omurice from '../assets/image/omurice.jpg';
import sashimi from '../assets/image/sashimi.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons'; 






const Gallery_food = () => {
    return(
    <section_gallery>
<div className="container container-gallery" id='food-gallery'>
    <h1 className="gallery-title"> Food Gallery <FontAwesomeIcon className="ico-gallery" icon={faEye} style={{marginLeft:'20px', width:'35px', height:'auto',}}/></h1>
        <div className="row">
    <div className="col col-gallery">
        <img src={yakisoba} alt="sushi" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={raimien} alt="raimien" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={gyoza} alt="gyoza" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={kobebemeat} alt="kobebeaf" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={mochi} alt="mochi_sakura" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={tonkatsucurry} alt="tonkatsu" style={{width:'300px'}}/>
    </div>
    <div className="col col-gallery">
        <img src={omurice} alt="omurice" style={{width:'300px'}}/>
    </div> 
    <div className="col col-gallery">
        <img src={sashimi} alt="sashimi" style={{width:'300px'}}/>
    </div> 
  </div>
</div>

    </section_gallery>
    );
};
export default Gallery_food;