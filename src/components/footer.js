import React from "react";
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaCopyright} from 'react-icons/fa';
export default function Footer(){
    return(
        <div className="footer" id="footer">
            <div className="contacts">
                <a href='#' target="_blank"><FaFacebook className="social-icons"/></a>
                <a href='#' target="_blank"><FcGoogle className="social-icons"/></a>
                <a href='#' target="_blank"><FaLinkedin className="social-icons"/></a>
                <a href='#' target="_blank"><FaInstagram className="social-icons"/></a>
            </div>
            <div><a href="#">Back to Top</a></div>
            <a href="#" target="_blank" style={{color:"black"}}>Copyright <FaCopyright/> 2023 Radhakrishanan Hall of Residence . All rights reserved</a>
        </div>
    );
}