import React from "react";
import "../Assets/Css/GlobalScss.scss";
import "../Assets/Css/pages/LoginPages.scss"
import ReCAPTCHA from "react-google-recaptcha";
export const LoginPage = () => {
  return (
    <div className="ContainerDefault">
      <div className="ContainerKiri">
        <div className="ContainerCrausel"></div>
      </div>

      <div className="ContainerKanan">
        <div className="CardLogin">
          <div className="CardLoginHeader">
            <h1>Tes</h1>
            <p>p</p>
          </div>
          <div className="CardLoginBody">
                <input 
                placeholder="No Polis"
                type="text">

                </input>
                <input type="date">

                </input>
               
                    <div className="rechaptaFrom">
                     {/* <ReCAPTCHA
                    // onChange={ChaptaFrom}
                    theme="light"
                    type="image"
                    id="RechaptaFrom"
                    // sitekey={Sitekey}
                    /> */}
                    rechapta
                    </div>


                <button>Lanjutakan</button>

          </div>
        </div>
      </div>
    </div>
  );
};
