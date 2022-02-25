import React, {useState} from "react";
import cho_written from "../assets/image/cho_written2.png";
import chocho_spot from "../assets/image/cho-rest.jpg";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faMicrophoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faBookReader} from '@fortawesome/free-solid-svg-icons';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';

const Nav_header = () => {
    return(
      <section_header>
          <Navbar/>
          <Spot_home/>       
      </section_header>      
    );
};
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
    
    return (
        <nav className ="header">
        <header className ="navbar">
              <div className="nav-brand">
                <img src={cho_written} className="cho_written_logo" id='/' href='/'/> <span className="span-logo">蝶</span>
              </div>
              <div className="container-toggler">
                <button className ="btn navbar-toggler" onClick={handleClick}>
                    {click ? (<FaTimes  />)
                        : (<FaBars/>)}
                </button>
              </div>
              </header>
              
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                      <a href='/' onClick={closeMenu}>Home</a><FontAwesomeIcon className="ico-home-nav" icon={faHome} style={{marginLeft:'30px', color:'#2eab65'}}/></li>
                    <li className='nav-item'>
                      <a href='#about-us' onClick={closeMenu}>About us</a><FontAwesomeIcon className="ico-about-nav" icon={faMicrophoneAlt} style={{marginLeft:'30px', color:'#2eab65'}}/></li>
                    <li className='nav-item'>
                      <a href='#food-gallery' onClick={closeMenu}>Food Gallery</a><FontAwesomeIcon className="ico-gallery-nav" icon={faEye} style={{marginLeft:'30px', color:'#2eab65'}}/></li>
                    <li className='nav-item'>
                      <a href='#e-menu' onClick={closeMenu}>E-Menu</a><FontAwesomeIcon className="ico-menu-nav" icon={faBookReader} style={{marginLeft:'30px',color:'#2eab65'}}/></li>
                    <li className='nav-item'>
                      <a href='#contacts' onClick={closeMenu}>Contacts</a><FontAwesomeIcon className="ico-menu-nav" icon={faAddressBook} style={{marginLeft:'30px',color:'#2eab65'}}/></li>
                </ul>
        </nav>
    );
};

const Spot_home = () => {
    return(    
      <div className="container-img img_home" id="home">  
        <img src={chocho_spot} className="chocho_spot" alt="..." />
      </div>          
    );
};

export default Nav_header;