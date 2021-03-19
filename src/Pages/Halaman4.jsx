import React from "react";
import "../Assets/Css/pages/Endpages.scss";
import Logo from "../Assets/Img/Logo.jpg";
import { useHistory } from "react-router-dom";

export const Halaman4 = () => {
  const history = useHistory();

  const ButtonAction = (e) => {
    if (e.target.id === "backToHome") {
      history.push("/");
    } else {
      alert("tanks");
    }
  };

  return (
    <div className="EndpageWrapeer">
      <div className="cardEnd">
        <div className="cardheader">
          <img src={Logo} alt="" />
        </div>
        <div className="seloganEndpage">
          Terima kasih telah mengisi Formulir Pengkinian Data Nasabah
        </div>
      </div>
      <div className="buttonWrap">
        <p>Apakah Anda ingin melakukan Pengkinian Data Nasabah lainnya ?</p>
        <div className="buttonGroup">
          <button onClick={ButtonAction} id="backToHome" className="btn-BackTo">
            YA
          </button>
          <button className="btn-Done">SELESAI</button>
        </div>
      </div>
    </div>
  );
};
