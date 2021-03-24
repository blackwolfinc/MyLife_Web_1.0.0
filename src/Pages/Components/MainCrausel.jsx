import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../Assets/Css/ComponentsCss/MainCrasuel.scss";
import Cimage1 from "../../Assets/Img/NCrausel1/art-carousel-1-468-x-453@3x.png";
import Cimage2 from "../../Assets/Img/NCrausel2/art-carousel-2-468-x-453@3x.png";
import Cimage3 from "../../Assets/Img/NCrasuel3/art-carousel-3-468-x-453@3x.png";
export const MainCrausel = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        autoPlay={true}
        className="presentation-mode"
      >
        <div>
          <img alt="" src={Cimage1} />
          <div className="carousel-caption">
          </div>
        </div>
        <div>
          <img alt="" src={Cimage2} />
          <div className="carousel-caption"> 
          </div>
        </div>
        <div>
        <img alt="" src={Cimage3} />
        <div className="carousel-caption">
          
        </div>
      </div>
     
       
        
      </Carousel>
    </div>
  );
};
