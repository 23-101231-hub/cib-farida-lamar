import React from 'react';
import "./Card3.css";
import img4 from "../assets/Div [aspect-wrapper]2.png";

const Card3 = () => {
    return ( 

      <div className="news-item">
      <div className="news-image">
        <img src={img4} />
      </div>
      <div className="news-content">
        <div className="news-date">08/07/2025 , Commercial International Bank (CIB)</div>
        <a href="new" className="news-title-link">
          Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Close the Seventh
          Securitization Bond Issuance for Halan Consumer Finance
        </a>
        <div className="news-date">
          CIB has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance.
        </div>
      </div>
    </div>

     );
}
 
export default Card3;
