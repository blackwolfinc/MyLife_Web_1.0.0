import React, { useEffect } from "react";
import "../Assets/Css/GlobalScss.scss";
import "../Assets/Css/pages/LoginPages.scss";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets/Css/Validation.scss";
import icon1 from "../Assets/Img/Icon/ico-polis-24x24_2021-03-11/ico-polis-24x24@3x.png";
import icon2 from "../Assets/Img/Icon/ico-calendar-24x24_2021-03-11/ico-calendar-24x24@3x.png";
import ReCAPTCHA from "react-google-recaptcha";
import { MainCrausel } from "./Components/MainCrausel";
import { connect } from "react-redux";

const LoginPage = (getdataAll) => {
  // ambil data token
  // useEffect(() => {

  // }, []);
  console.log(getdataAll.getdataAll.token);
  return (
    <div className="ContainerDefault">
      <div className="ContainerKiri">
        {/* Logo Atas Kiri*/}
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        {/* Crausel Gerak */}
        <div className="ContainerCrausel">
          <MainCrausel />
        </div>
      </div>
      {/*Login Card*/}
      <div className="ContainerKanan">
        <div className="CardLogin">
          {/* Hader Login*/}
          <div className="CardLoginHeader">
            <h3>Formulir Pengkinian Data </h3>
            <p>Silahkan lengkapi data dibawah ini untuk melanjutkan</p>
          </div>
          {/* body login From  */}
          <div className="CardLoginBody">
            {/* inputan Body */}
            <div className="input-Container">
              <img src={icon1}></img>
              <label>Nomor Polis</label>
              <input placeholder="Masukan No.Polis" type="text"></input>
            </div>
            {/* Inputan Tanggal Lahir */}
            <div className="input-Container">
              <img src={icon2}></img>
              <label>Tgl. Lahir</label>
              <input placeholder="Masukan No.Polis" type="date"></input>
            </div>
            {/* Goggle ReChapta  */}
            <div className="rechaptaFrom">
              <ReCAPTCHA
                // onChange={ChaptaFrom}
                theme="light"
                type="image"
                id="RechaptaFrom"
                sitekey="6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
              />
            </div>
            {/* Btn  Validasi  */}
            <button className="BtnLanjutkan">LANJUTKAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getdataAll: state.getdataAll,
  };
};

// const mapDispatchToProps=(dispatch)=> {
//   return (
//   getdataToken: () => dispatch({type: "GET_DATA_TOKEN"})
//   )
// }
export default connect(mapStateToProps, null)(LoginPage);
