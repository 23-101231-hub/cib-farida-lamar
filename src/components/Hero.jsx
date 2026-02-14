import React from 'react';
import "./Hero.css";
import Btn from './Btn';


const Hero = () => {
    return (  
        <section className="hero">
  <div className="hero-content">
    <div className="logo">CIB</div>

    <p className="hero-text">
      Delivering value to our clients, our <br /> community and our shareholders
    </p>
    <Btn />
    
 
  </div>
</section>
    );
}
 
export default Hero;
