import React from "react";
import image1 from "../images/juniper.webp";
import image2 from "../images/festiva.jpg";
import image3 from "../images/vamos.png";

function Models() {

    return(
        <div id="models">
            <h1>MODELS</h1>

            <div className="model-image">
               <div className="details">
               <img src={image1} alt="fb" />
               <h3>Juniper</h3>
               </div>

               <div className="details">
               <img src={image2} alt="ee" />
               <h3>Festiva</h3>
               </div>

               <div className="details">
               <img src={image3} alt="eeg" />
               <h3>Vamos</h3>
               </div>
              
            </div>
        </div>
    )
}

export default Models;