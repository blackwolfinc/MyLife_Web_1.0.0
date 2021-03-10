import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../Assets/Css/ComponentsCss/MainCrasuel.scss"
import logo1 from "../../Assets/Img/Logo.jpg"
export const MainCrausel = () => {
  return (
    <div>
       <Carousel    infiniteLoop={true} autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img
            alt=""
            src={logo1}
          />
          <p className="legend">Legend 7</p>
        </div>

      </Carousel>
    </div>
  );
};
