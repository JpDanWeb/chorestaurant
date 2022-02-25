import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'; 
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'; 
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons'; 
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


const Contacts_map = () => {
    return(
        <div className="container container-info" id='contacts'>
            <h1 className="contact-title-card"> Our conctacts <FontAwesomeIcon className="ico-calendar" icon={faCalendarAlt} style={{marginLeft:'20px', width:'35px', height:'auto',}}/></h1>
            <div className="card mb-3 card_info">
                <div className="row g-0">
                <div className="col-md-4 container-map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.6346339544307!2d138.8486146582113!3d35.42335918077434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8c0b6ac4afb7391!2zMzXCsDI1JzI0LjEiTiAxMzjCsDUwJzU5LjAiRQ!5e0!3m2!1sit!2sit!4v1642014669586!5m2!1sit!2sit" 
                allowfullscreen="" loading="lazy"></iframe> 
                </div>
                <div className="col-md-8">
                <div className="card-body container-undress">
                    <h5 className="card-title">Days and Location :</h5>
                    <ul className="hours-days">
                        <li>Monday - Closed</li>
                        <li>From Tuesday to Sunday 11.00am to 3:00pm / 19:30pm to 23:00pm</li>
                        
                    </ul>
                    <p className="street" style={{marginLeft:'10px',}}><FontAwesomeIcon className="ico-undress" icon={faMapMarkedAlt} style={{marginLeft:'5px', width:'30px', height:'auto', marginRight:'11px',color:'#716558',}}/>103 Yamanaka, Yamanakako, Yamanashi 401-0501</p>
                    <p className="street" style={{marginLeft:'10px',}}><FontAwesomeIcon className="ico-number" icon={faPhoneSquare} style={{marginLeft:'5px', width:'25px', height:'auto', marginRight:'11px', color:'#716558',}}/> Phone: +81 765 866 9456</p>
                    <ul className="social">
                    <a className="link" href="https://www.linkedin.com/login/it"><FaLinkedin className="ico-linkedin"/>
                    </a>
                    <a className="link" href="https://it-it.facebook.com/"><FaFacebook className="ico-facebook"/>
                    </a>
                    <a className="link" href="https://www.instagram.com/"><FaInstagram className="ico-instagram"/>
                    </a> 
                    </ul>
                </div>
                </div>
                </div>
        </div>
      </div>
    );
};
 
 
export default Contacts_map;