import React, { useEffect, useState } from "react";
import "../Assets/Css/GlobalScss.scss";
import "../Assets/Css/pages/LoginPages.scss";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets/Css/Validation.scss";
import icon1 from "../Assets/Img/Icon/ico-polis-24x24_2021-03-11/ico-polis-24x24@3x.png";
import icon2 from "../Assets/Img/Icon/ico-calendar-24x24_2021-03-11/ico-calendar-24x24@3x.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";
import { MainCrausel } from "./Components/MainCrausel";
import { connect, useDispatch, useSelector } from "react-redux";
import { getData, GetDataPolis } from "../Redux/Action/getData";

const LoginPage = (getdataAll) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.getdataAll.token);
  // ==============================================================
  // Login Paramater
  // ==============================================================

  const [TokenLogin, SetTokenLogin] = useState("");
  const [loginStatus, SetloginStatus] = useState(false);
  // ChaptaF
  const [Chapta, SetChapta] = useState("");
  // Data Validator '
  const [DatatanggalPolis, setDatatanggalPolis] = useState("2012-09-23");
  const [DataTanggalInputan, setDataTanggalInputan] = useState("");
  // ==============================================================
  // Master data
  // ==============================================================
  const [DataPolis, SetDataPolis] = useState("");
  const [DataNama, SetDataNama] = useState("");
  const [DataNumber, SetDataNumber] = useState(0);
  const [DataEmail, SetDataEmail] = useState("");
  const [NamaJalanKodePos, SetNamaJalanKodePos] = useState("");
  const [NamaJalanKota, SetNamaJalanKota] = useState("");
  const [NamaJalanProfinsi, SetNamaJalanProfinsi] = useState("");
  const [NamaJalanKecamatan, SetNamaJalanKecamatan] = useState("");
  const [NamaJalanRumah, SetNamaJalanRumah] = useState("");
  // ==============================================================
  // Eror Hedle
  // ==============================================================
  const [ErorInput, SetErorInput] = useState(false);

  // configurasi  Input Data Polis
  const [Titik1, SetTitik1] = useState(true);
  const [Titik2, SetTitik2] = useState(true);
  // ==============================================================
  // Fungsi Fungsi
  // ==============================================================

  //==========================================Verivikasi Login
  const LoadValidation = () => {
    //  Validation TGl data polis sama dengan inputan
    if (DatatanggalPolis === DataTanggalInputan) {
      // Kodisi Submit Login
      if (Chapta === "") {
        alert("masukan Chapta Terlebih Dahulu");
      }
      if (Chapta !== "") {
        localStorage.LoginStatusValid = "true";
        history.push("page2");
      }
    } else {
      alert("Data Polis Dan Tanggal lahir TIDAK COCOK ");
    }

    // if (loginStatus === true  &&  Chapta !== ""  && ) {

    // } else {

    // }
  };

  //==========================================Hendle Inputan Chapta
  const ChaptaFrom = (e) => {
    SetChapta(e);
    console.log(e);
  };
  //============================================Perubahan Data
  const handleChangeAll = (e) => {
    if (e.target.id === "datePolis") {
      setDataTanggalInputan(e.target.value);
    }

    // Setup Auto Titik Pada Nomer Polis
    if (e.target.id === "noPolis") {
      if (DataPolis.length === 2 && Titik1 === true) {
        e.target.value = DataPolis + "." + e.target.value.substr(2);
        SetDataPolis(e.target.value);
        SetTitik1(false);
      }
      if (DataPolis.length < 1 && Titik1 === false) {
        SetDataPolis(DataPolis);
        SetTitik1(true);
      }
      if (DataPolis.length === 10 && Titik2 === true) {
        e.target.value = DataPolis + "." + e.target.value.substr(10);
        SetDataPolis(e.target.value);
        SetTitik2(false);
      }
      if (DataPolis.length < 10 && Titik2 === false) {
        SetDataPolis(DataPolis);
        SetTitik2(true);
      } else {
        SetDataPolis(e.target.value);
      }
    }
    //  PEmbatasn Carachter Pada Input Nama
    if (
      e.target.id === "Name" &&
      e.target.value.match(/^[A-Za-z ][A-Za-z ]*$/)
    ) {
      SetErorInput(false);
      SetDataNama(e.target.value);
    } else {
      SetErorInput(true);
    }
  };

  // ###########################
  // UseEffect React Hook ######
  // ###########################

  //===============================================================
  //Reload Data Pertama
  //===============================================================
  useEffect(() => {
    dispatch(
      getData({
        username: "george",
        password: "george12345",
      })
    );
  }, []);

  //===============================================================
  // Data Get Polis Sementara
  //===============================================================
  useEffect(() => {
    if (DataPolis.length == 12) {
      dispatch(GetDataPolis(DataPolis, `${token}`));
    } else {
      // SetAllFrom("hide");
      // console.log(response.data.data)
    }
  }, [DataPolis]);

  // console.log(getdataAll.getdataAll.token);
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
              <input
                autoFocus
                maxLength="12"
                onChange={handleChangeAll}
                id="noPolis"
                name="noPolis"
                placeholder="Masukan No.Polis"
                type="text"
                required
              ></input>
            </div>
            {/* Inputan Tanggal Lahir */}
            <div className="input-Container">
              <img src={icon2}></img>
              <label>Tgl. Lahir</label>
              <input
                onChange={handleChangeAll}
                id="datePolis"
                name="datepolis"
                placeholder="Masukan No.Polis"
                type="date"
              ></input>
            </div>
            {/* Goggle ReChapta  */}
            <div className="rechaptaFrom">
              <ReCAPTCHA
                onChange={ChaptaFrom}
                theme="light"
                type="image"
                id="RechaptaFrom"
                sitekey="6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
              />
            </div>
            {/* Btn  Validasi  */}
            <button onClick={LoadValidation} className="BtnLanjutkan">
              LANJUTKAN
            </button>
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
