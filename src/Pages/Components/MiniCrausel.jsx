import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../../Assets/Css/ComponentsCss/MiniCrausel.scss";
import logo1 from "../../Assets/Img/Logo.jpg";
import Cimage1 from "../../Assets/Img/Crausel1/art-carousel-1-423x421@3x.png";
import Cimage2 from "../../Assets/Img/Crausel2/art-carousel-2-424x421@3x.png";
export const MiniCrausel = () => {
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
              {/* <h1>Yuk, segera lakukan</h1>
              <h1>Pengkinian Data Nasabah</h1> */}
              {/* <p >Dalam upaya selalu meningkatkan pelayanan kepada Nasabah  <br/> Equity Life Indonesia.</p> */}
            </div>
          </div>
          <div>
            <img alt="" src={Cimage2} />
            <div className="carousel-caption">
              {/* <h1>Yuk, segera lakukan</h1>
              <h1>Pengkinian Data Nasabah</h1>
              <p >Dalam upaya selalu meningkatkan pelayanan kepada Nasabah  <br/> Equity Life Indonesia.</p> */}
            </div>
          </div>
         
         
          
        </Carousel>
      </div>
    )
}
