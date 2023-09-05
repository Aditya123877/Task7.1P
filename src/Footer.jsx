import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
function Footer(){
    return (
        <div className="footer">
            <div className="footer-left">
                <Link to='/about'>
                    About Deakin
                </Link>
            </div>
            <div className="footer-center">
                <Link to='/connect'>
                    Connect with us
                </Link>
            </div>
            <div className="footer-right">
               <a href="https://www.facebook.com/DeakinUniversity">
                <FaFacebook className="icon"/>
               </a>
               <a href="https://www.instagram.com/deakinuniversity/">
                <FaInstagram className="icon"/>
               </a>
               <a href="https://twitter.com/deakin">
                <FaTwitter className="icon"/>
               </a>
            </div>
        </div>
    )
}
export default Footer