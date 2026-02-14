import React from 'react';
import "./Nav.css";
import img1 from "../assets/Image.png";
import Navtext from './Navtext';

const Nav = () => {
    return ( 
        <nav>
  <div className="nav-container">
    
  <img src={img1} />

    <ul>
    <Navtext />
    <Navtext />
    <Navtext />
    <Navtext />
    <Navtext />
    <Navtext />
    <Navtext />
    </ul>

  </div>
</nav>
     );
}
 
export default Nav;