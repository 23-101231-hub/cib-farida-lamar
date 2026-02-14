import React from 'react';
import "./Footer.css";
import  img1  from '../assets/Image.png';
import Footertext from './Footertext';
import img9 from "../assets/Icon2.png";
import img10 from "../assets/Icon3.png";
import imgf from "../assets/Iconf.png";
import imgi from "../assets/Iconi.png";
import imgn from "../assets/Iconn.png";
import imgy from "../assets/Icony.png";
import imgx from "../assets/Iconx.png";
import imgw from "../assets/Iconw.png";

const Footer = () => {
    return ( 
        <>
        <footer className="footer">
        <div className="footer-inner">
      
          <div className="footer-top">
          <img src={img1} />
      
            <div className="cols">
              <div className="col">
               <Footertext />
                <ul className="links">
                <Footertext />
                <Footertext />
                <Footertext />
                </ul>
              </div>
      
              <div className="col">
              <Footertext />
                <ul className="links">
                <Footertext />
                  <Footertext />
                  <Footertext />
                </ul>
              </div>
      
              <div className="col">
              <Footertext />
                <ul className="links">
                <Footertext />
                  <Footertext />
                  <Footertext />
                </ul>
              </div>
            </div>
      
            <div className="apps">
            <img src={img9} />
            <img src={img10} />
            </div>
          </div>
      
          <div className="divider"></div>
      
          <div className="footer-bottom">
            <div className="legal">
            <Footertext />
            <Footertext />
            <Footertext />
            <Footertext />
            </div>
      
            <div className="social">
            <img src={imgf} />
            <img src={imgi} />
            <img src={imgn} />
            <img src={imgy} />
            <img src={imgx} />
            <img src={imgw} />
            </div>
          </div>
      
        </div>
      

      </footer>
      <div className='div2'>
        <div className='div2text'>Copyright © 2025 Commercial International Bank</div>
      </div>
      </>
    
    );
}
 
export default Footer;
