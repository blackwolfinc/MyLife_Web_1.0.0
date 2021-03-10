import React from "react";
import "../Assets/Css/GlobalScss.scss";
import "../Assets/Css/pages/LoginPages.scss"
import logo from "../Assets/Img/Logo.jpg"
import "../Assets/Css/Validation.scss"

import ReCAPTCHA from "react-google-recaptcha";
import { MainCrausel } from "./Components/MainCrausel";
export const LoginPage = () => {
  return (
    <div className="ContainerDefault">
      <div className="ContainerKiri">
        <div className="logo-Container">
          <img src={logo} alt=""/>
        </div>
        <div className="ContainerCrausel">
        <MainCrausel/>
        </div>
      </div>

      <div className="ContainerKanan">
        <div className="CardLogin">
          <div className="CardLoginHeader">
            <h3>Formulir Pengkinian Data</h3>
            <p>Silahkan lengkapi data dibawah ini untuk melanjutkan</p>
          </div>
          <div className="CardLoginBody">
                <input
                placeholder="No Polis"
                type="text">

                </input>
                <input type="date">

                </input>

                    <div className="rechaptaFrom">
                     <ReCAPTCHA
                    // onChange={ChaptaFrom}
                    theme="light"
                    type="image"
                    id="RechaptaFrom"
                    sitekey="6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
                    />

                    </div>


                <button className="BtnLanjutkan">LANJUTKAN</button>

          </div>
        </div>
      </div>
    </div>
  );
};
