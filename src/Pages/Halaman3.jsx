import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets//Css/pages/Pages3.scss";
import "../Assets//Css/Validation.scss";
import {editStatus} from "../Redux/Action/loginStatus"


import { connect, useDispatch, useSelector } from "react-redux";
import { MiniCrausel } from "./Components/MiniCrausel";
import { useState  ,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";


export const Halaman3 = () => {
  const history = useHistory();
  const Dispatch  = useDispatch() ;

  const UserNoPolisData = useSelector((state) => state.editDataReducers.data);
  const UserNoPolis = useSelector((state) => state.editDataReducers.no_polis);
  const userNoBefore  = useSelector((state) => state.getdataAll.userPolis.mobile_no);
  const userEmailBefore =  useSelector((state) => state.getdataAll.userPolis.email);
  const gender =  useSelector((state) => state.getdataAll.userPolis.gender);

  // hide anda pop up parameter
  const options = [
    { value: "Indonesia", label: "Indonesia" },
    { value: "Amerika", label: "Amerika" },
    { value: "Engris", label: "Engris" },
  ];




  const util = require('util'),
  request = util.promisify(require('request')),
  fs = require('fs'),
  fsp = fs.promises;

 
  // ==============================================================
  // Master Data
  // ==============================================================

  // Data Otp
  const [OtpValue, SetOtpValue] = useState("");
  const [SendDataFinal, SetSendDataFinal] = useState(false);

  // Untuk Data Update
  const [PersetujuanValid, SetPersetujuanValid] = useState(false);
  const [GenderPost, SetGenderPost] = useState("");


  //Data For OTP
  const [DataEmail, SetDataEmail] = useState("");
  const [DataNumber, SetDataNumber] = useState(0);
  //Modal State
  const [ModalState, SetModalState] = useState(false);
  const [ModalStateTes, SetModalStateTes] = useState(false);

  // hide and show
  const [CheckboxPersetujuan, SetCheckboxPersetujuan] = useState("hide");
  const [CheckPersetujuan, SetCheckPersetujuan] = useState("hide");
  const [Loader, SetLoader] = useState("hide");
  const [LoaderWrap, SetLoaderWrap] = useState("hide");
  const [AllFrom, SetAllFrom] = useState("hide");


  // Send OTP
  const [OtpTriger, setOtpTriger] = useState(false)

  const UploadFile = (UserNoPolisData.UploadFileInput)
  console.log(UploadFile)


  
   // ==============================================================
  // On Submit
  // ==============================================================
  // sumbit Data Baru Setelah OTp



  useEffect(() => {
    if(OtpTriger === true){

      var axios = require('axios');
      var data = JSON.stringify({"customerCode":"CM09012","customerName":"Mukhamat Jafar","phoneNo":"085779135418","email":"inc.blackwolf@gmail.com","genderCode":"L","otpType":"E","typeCode":"E46"});
      
      var config = {
        method: 'post',
        url: 'https://api-pengkinian-data.herokuapp.com/api/v1/generate-otp',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        setOtpTriger(false)
      });

    }




    if (SendDataFinal === true) {
      // Api Untuk Send KE form
      SetLoader("loader");
      SetLoaderWrap("loaderWrap");
      setOtpTriger(false)

      var data = new FormData();
      data.append('changeAddressCode', '001');
      data.append('policyNo', UserNoPolis);
      data.append('policyHolder', UserNoPolisData.InputNamaPemegangPolis);
      data.append('handphoneNo', '08577915418');
      data.append('emailAddress', UserNoPolisData.EmailChange);
      data.append('changeData', '1');
      data.append('newHandphoneNo', UserNoPolisData.NomorWhatsAppPemegangPolis);
      data.append('whatsappNumber', '1');
      data.append('whatsappNo', '085779135418');
      data.append('newEmailAddress', UserNoPolisData.EmailChange);
      data.append('changeAddress', '1');
      data.append('address1', UserNoPolisData.namaJalanAddres1 + UserNoPolisData.namaJalanAddres2 );
      data.append('address2', UserNoPolisData.namaJalanKelurahan);
      data.append('address3', UserNoPolisData.namaJalanKecamatan);
      data.append('cityCode', UserNoPolisData.namaJalanKota);
      data.append('stateCode', '001');
      data.append('postalCode', UserNoPolisData.namaJalanKodePos);
      data.append('countryCode', '001');
      data.append('faxNo', '0243299');
      data.append('phoneNo', UserNoPolisData.InputNomorHandponePemegangPolis);
      data.append('file', UploadFile);
      data.append('active', '1');
      data.append('transactionCode', '001');
      data.append('transactionStatus', 'active');
      // =================
          


      var requestOptions = {
        method: "POST",
        body: data,
        redirect: "follow",
      };

      fetch(
        "https://myelife-web-customer.herokuapp.com/api/v1/change-address",
        requestOptions
      )
        .then((response) => response.text())
        .then(function (response) {
          SetAllFrom("");
          localStorage.clear();
          alert(response)
          SetLoader("hide");
          SetLoaderWrap("hide");
          history.push("endpage");
          //  console.log(response.message)
        })
        .catch((error) => alert("error", error));
    } else {
      //  alert("eror Post")
    }
  }, [SendDataFinal][OtpTriger]);


  // ==============================================================
  // Hide And Show
  // ==============================================================

  const CheckbookAction = (e) => {
    if (e.target.id === "Persetujuan" && CheckPersetujuan === "hide") {
      SetCheckPersetujuan("");
      SetPersetujuanValid(true);
      SetCheckboxPersetujuan("check-icon");
    }
    if (e.target.id === "Persetujuan" && CheckPersetujuan === "") {
      SetCheckPersetujuan("hide");
      SetPersetujuanValid(false);
      SetCheckboxPersetujuan("hide");
    }
    if (e.target.id === "backButton") {
      history.push("page2");
      // Dispatch(editStatus(true))
    }
  };

  const ModalTogller = () => {
    if (ModalState === false && PersetujuanValid === true) {
      SetModalState(true);
    }
    if (ModalState === false && PersetujuanValid === false) {
      alert("Validasi Pernyataan Terlebih dahulu");
      document.getElementById("Persetujuan").focus();
      SetModalState(false);
    }
    if (ModalState === true && PersetujuanValid === true) {
      SetModalState(false);
    }
  };


  // ==============================================================
  // Fungsi Fungsi
  // ==============================================================

  const handleChangeAll = (e) => {
    //OTP Input

    if (e.target.id === "InputOTP") {
      SetOtpValue(e.target.value);
    }
    // perubahan Data
    if (e.target.id === "Email") {
      SetDataEmail(e.target.value);
    }
    if (e.target.id === "Nomor") {
      SetDataNumber(e.target.value);
    }
  };

  // ==============================================================
  // Otp Section
  // ==============================================================

  const OtpValidation = () => {
    if (
      OtpValue === "1234" &&
      ModalState === true &&
      PersetujuanValid === true
    ) {

      alert("Kode OTP Benar");
      SetSendDataFinal(true);
    }
    if (
      OtpValue !== "1234" &&
      ModalState === true &&
      PersetujuanValid === true
    ) {
      alert("kode OTP salah ");
    }
  };

  const OtpEmail = () => {
    alert("OTP Dikirimkan Lewat E-mail");
    setOtpTriger(true)
    
    if (gender === "PRIA") {
      SetGenderPost("L")
    } 
    if (gender === "WANITA") {
      SetGenderPost("P")
    }
  
  };

  const OtpSMS = () => {
    alert("OTP Dikirimkan Lewat SMS / whatsaap");
  };


  return (
    <div className="ContainerDefaultSec">
        <div className={`${LoaderWrap}`}>
        <div className={`${Loader}`}></div>
      </div>
      <div className="ContainerKiri">
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        <div className="ContainerCrausel">
          <MiniCrausel />
        </div>
      </div>

      <div className="ContainerKanan">
        {/* Title page */}
        <div className="TitlePage">
          <h3>Ringkasan Data Nasabah</h3>
          <p>Pastikan kembali data dan informasi sudah sesuai.</p>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i className="fas fa-user"></i>
            </span>{" "}
            <p>Data Nasabah Terakhir</p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>No. Polis</p>
              <p className="hasil">
                <b>{UserNoPolis}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Nama Pemegang Polis</p>
              <p className="hasil">
                <b>{UserNoPolisData.InputNamaPemegangPolis}</b>
              </p>
            </div>
          </div>
        </div>
        {/* Show Data diri 2 */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i className="fas fa-phone-alt"></i>
            </span>{" "}
            <p>Kontak Nasabah</p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>No. Handphone</p>
              <p className="hasil">
                <b>{UserNoPolisData.InputNomorHandponePemegangPolis}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>No. WhatsApp</p>
              <p className="hasil">
                <b>{UserNoPolisData.NomorWhatsAppPemegangPolis}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>E-mail</p>
              <p className="hasil">
                <b>{UserNoPolisData.EmailChange}</b>
              </p>
            </div>
          </div>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i className="fas fa-map-marker-alt"></i>
            </span>{" "}
            <p>Alamat Korespondensi </p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>Alamat</p>
              <p className="hasil">
                <b>
             
                {UserNoPolisData.namaJalanAddres1+" "+UserNoPolisData.namaJalanAddres2}
                </b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Negara</p>
              <p className="hasil">
                <b>{UserNoPolisData.optionsNegaraLabel}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Provinsi</p>
              <p className="hasil">
                <b>{UserNoPolisData.optionStateLabel}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kota</p>
              <p className="hasil">
                <b>{UserNoPolisData.namaJalanKota}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kecamatan</p>
              <p className="hasil">
                <b>{UserNoPolisData.namaJalanKecamatan}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kelurahan</p>
              <p className="hasil">
                <b>{UserNoPolisData.namaJalanKelurahan}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kode Pos</p>
              <p className="hasil">
                <b>{UserNoPolisData.namaJalanKodePos}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="PerubahanDataCheck">
          <div className="DataDiriTerakhir">
            <span>
              <i className="fas fa-id-card"></i>
            </span>{" "}
            <p>Kartu Tanda Penduduk</p>
          </div>
          <div className="UKGroup2">
            <img
              src={UserNoPolisData.Url}
              alt=""
            />
            <div className="UKButtonGroup"></div>
          </div>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i className="fas fa-exclamation-circle"></i>
            </span>{" "}
            <p>Pernyataan</p>
          </div>

          <div className="Datadiri">
            {/* wraper ctg   */}

            {/* end */}
            <p>
              Saya menyatakan bahwa informasi yang tertera dalam formulir ini
              adalah benar. Saya setuju untuk menyesuaikan data Polis sesuai
              dengan informasi yang tercantum dalam formulir ini.
            </p>
            <br />

            <p>
              Apabila data yang saya berikan tidak benar maka saya bertanggung
              jawab penuh atas kesalahan tersebut.
            </p>
            <div className={`success-checkmark ${CheckboxPersetujuan}`}>
              <div className={` ${CheckboxPersetujuan}`}>
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
            <hr />

            <div
              className={` SetujuValidator checkboxlWrap ${
                CheckPersetujuan !== "hide" ? "hide" : "tes"
              } `}
            >
              <input
                name="Persetujuan"
                id="Persetujuan"
                type="checkbox"
                checked={CheckPersetujuan === "hide" ? false : true}
                onChange={CheckbookAction}
                type="checkbox"
              />
              <p>Ya, Saya Menyetujuai pernyataan di atas.</p>
            </div>
          </div>
        </div>
        <MDBModal isOpen={ModalState} centered>
          <MDBModalBody>
            <div className="OtpInputWrap">
              <h5> Masukan Kode OTP [1234]</h5>
              <input
                className="InputOTP"
                type="number"
                name="InputOTP"
                id="InputOTP"
                onChange={handleChangeAll}
              ></input>
            </div>
            <div className="DataOtp">
              <div className="otpCon">
                <p>Nomor Tujuan Otp : </p>
                <p>{userNoBefore}</p>
              </div>

              <hr />
              <div className="otpCon">
                <p>Email Tujuan Otp : </p>
                <p>{userEmailBefore ==="" ? "Belum Mempunyai Email " : userEmailBefore }</p>
              </div>
            </div>
            <div className="btnModalGroup">
              <button onClick={OtpEmail}> Send By Email</button>
              <button disabled onClick={OtpSMS}> Send By No Handpone</button>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={ModalTogller}>
              Close
            </MDBBtn>
            <MDBBtn color="primary"  onClick={OtpValidation}>
              Validation
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        {/* btn Lanjut Dan back  */}

        <div className="ButtonGroupNav">
          <button onClick={CheckbookAction} id="backButton" className="button2">
            {" "}
            <i className="far fa-arrow-alt-circle-left"></i> Kembali{" "}
          </button>
          <button
            id="ValidationButton"
            onClick={ModalTogller}
            className="button1"
          >
            Lanjutkan <i className="far fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
