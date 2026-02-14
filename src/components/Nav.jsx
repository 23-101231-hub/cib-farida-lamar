import React from 'react';
import "./Nav.css";
import img1 from "../assets/Image.png"

const Nav = () => {
    return ( 
        <nav>
  <div className="nav-container">
    
  <img src={img1} />

    <ul>
      <li><a href="about">About Us</a></li>
      <li><a href="investor">Investor Relations</a></li>
      <li><a href="responsible">Responsible Banking</a></li>
      <li><a href="new">Newsroom</a></li>
      <li><a href="learning">Learning Center</a></li>
      <li><a href="career">Careers</a></li>
      <li><a href="other">Others</a></li>
    </ul>

  </div>
</nav>
     );
}
 
export default Nav;