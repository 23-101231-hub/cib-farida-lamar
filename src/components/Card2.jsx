import React from 'react';
import "./Card2.css"
import img3 from "../assets/Div [aspect-wrapper].png"


const Card2 = () => {
    return ( 
        <div className="card2">
       <img src={img3} />
        <div className="card-content">
          <h3>Buying and making a home</h3>
          <p>
            Buying a home can be an emotional process, but it's important to approach it logically.
          </p>
          <a href="read">Read more</a>
        </div>
      </div>

     );
}
 
export default Card2;