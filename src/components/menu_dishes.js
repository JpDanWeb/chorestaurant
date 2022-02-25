import React from 'react';
import Menu from '../assets/image/Menu_cho.pdf';
import Qr_code from '../assets/image/qrcode_cho.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookReader} from '@fortawesome/free-solid-svg-icons'; 
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
const Bunner = () => {
    return(
<>
<Bunner_info/>
<Button_download/>
</>
    );
};

const Button_download = () => {
    return(
        <a className="btn-download-text" href={Menu} download={Menu}><button type="submit" className="btn btn_download">Download Now<FontAwesomeIcon className='ico-pdf' icon={faFilePdf} style={{marginLeft:'15px',}}/></button></a>
    );
};
const Bunner_info = () => {
    return(
        <div className="container-bunner" id='e-menu'>
            <div className="jumbotron jumbotron-fluid menu-download">
                <div className="container">
                     <p className="menu-text">Download your e-menu here <FontAwesomeIcon className='ico-menu' icon={faBookReader}style={{marginLeft:'12px',}}/></p>
                     <img className='qr_code' src={Qr_code}></img>                 
                </div>
            </div>
        </div>                            
);
};

export default Bunner;