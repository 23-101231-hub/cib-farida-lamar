import React from 'react';
import "./Card1.css";
import img2 from "../assets/Icon [online-banking-12].png";

const Card1 = () => {
    return ( 
         <div className="card">
              <img src={img2} />
            <p>Apply for a New Account</p>
          </div>
     );
}
 
export default Card1;