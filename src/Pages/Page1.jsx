import React, { forwardRef } from "react";
import axios from "axios";
import "../Assets/Css/LandingPage.scss";
import Logo from "../Assets/Img/Logo.jpg";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Page1 = () => {
  // Token Login
  const [TokenLogin, SetTokenLogin] = useState("");
  const [loginStatus, SetloginStatus] = useState(false);

  // chapta
  const [Chapta, SetChapta] = useState("");
  const [Sitekey, SetSitekey] = useState(
    "6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
  );
  const [SitekeyPost, SetSitekeypost] = useState(
    "6LeB9VwaAAAAAMhoHFkA1O-nxCv3DDW10aqZqWxv"
  );
  const [Chaptainput, SetTChaptainput] = useState();
  const recaptchaRef = React.createRef();
  // Set Hide and Pop-UP
  const [ErorInput, SetErorInput] = useState(false);
  const [Hide, SetHideAlternative] = useState("hide");
  const [CheckPersetujuan, SetCheckPersetujuan] = useState("hide");
  const [HideCheck, SetAlternativeCheck] = useState(false);
  const [HideCheck2, SetAlternativeCheck2] = useState("hide");
  const [HideCheck3, SetAlternativeCheck3] = useState("hide");
  const [ChangeWa, SetChangeWa] = useState("hide");
  const [ChangeNumber, SetChangeNumber] = useState("hide");
  const [ChangeEmail, SetChangeEmail] = useState("hide");
  const [AllFrom, SetAllFrom] = useState("hide");

  //Pengaturan titik
  const [Titik1, SetTitik1] = useState(true);
  const [Titik2, SetTitik2] = useState(true);

  // File Upload
  const [FileUpload, SetFileUpload] = useState();
  const [UploadStatus, SetUploadStatus] = useState(false);
  const [UrlFile, SetUrlFile] = useState(false);

  // data
  const [DataPolis, SetDataPolis] = useState("");
  const [DataNama, SetDataNama] = useState("");
  const [DataNumber, SetDataNumber] = useState(0);
  const [DataEmail, SetDataEmail] = useState("");
  // Untuk Data Update
  const [DataNumberBaru, SetDataNumberBaru] = useState(0);
  const [DataEmailBaru, SetDataEmailBaru] = useState("");
  const [NomerWhatsapp, SetNomerWhatsapp] = useState("");
  const [PersetujuanValid, SetPersetujuanValid] = useState(false);

  //
  const [ArrayNamaJalan, SetArrayNamaJalan] = useState([]);

  // All Data Store



  const CheckbookAction = (e) => {
    if (e.target.id === "NomorHpBaru" && HideCheck2 === "show") {
      SetAlternativeCheck2("hide");
      SetChangeNumber("hide");
    }
    if (e.target.id === "NomorHpBaru" && HideCheck2 === "hide") {
      SetAlternativeCheck2("show");
      SetChangeNumber("show");
    }
    if (e.target.id === "EmailBaru" && HideCheck3 === "show") {
      SetChangeEmail("hide");
      SetAlternativeCheck3("hide");
    }
    if (e.target.id === "EmailBaru" && HideCheck3 === "hide") {
      SetChangeEmail("show");
      SetAlternativeCheck3("show");
    }
    if (e.target.id === "emailCheck" && Hide === "hide") {
      SetHideAlternative("");
      SetAlternativeCheck("false");
    //  localStorage.removeItem("NamaJalanRumah");
    //  localStorage.removeItem("NamaJalanKota");
    //  localStorage.removeItem("NamaJalanProfinsi");
    //  localStorage.removeItem("NamaJalanKodePos");
    }
    if (e.target.id === "emailCheck" && Hide === "") {
      SetHideAlternative("hide");
      SetAlternativeCheck("true");
    }
    if (e.target.id === "Persetujuan" && CheckPersetujuan === "hide") {
      SetCheckPersetujuan("");
      SetPersetujuanValid(true);}

    if (e.target.id === "Persetujuan" && CheckPersetujuan === "") {
      SetCheckPersetujuan("hide");
      SetPersetujuanValid(false);


    }

  };

  const handleChangeAll = (e) => {
    // perubahan Data
    if (e.target.id === "NumberChange") {
      SetDataNumberBaru(e.target.value);
    }
    if (e.target.id === "EmailChange" && HideCheck3 === "show") {
      SetDataEmailBaru(e.target.value);
    }

    if (e.target.id === "NomerWhatsappTerbaru" && ChangeWa === "show") {
      SetNomerWhatsapp(e.target.value);
    }
    // nama jalan

    if (e.target.id === "namaJalan" && Hide === "") {
      localStorage.NamaJalanRumah = e.target.value;

      console.log(localStorage.NamaJalanRumah);
    }
    if (e.target.id === "namaJalan2" && Hide === "") {
      localStorage.NamaJalanKecamatan = e.target.value;

      console.log(localStorage.NamaJalanKecamatan);
    }
    if (e.target.id === "namaJalan3" && Hide === "") {
      localStorage.NamaJalanKota = e.target.value;

      console.log(localStorage.NamaJalanKota);
    }
    if (e.target.id === "namaJalan4" && Hide === "") {
      localStorage.NamaJalanProfinsi = e.target.value;

      console.log(localStorage.NamaJalanProfinsi);
    }
    if (e.target.id === "namaJalan5" && Hide === "") {
      localStorage.NamaJalanKodePos = e.target.value;

      console.log(localStorage.NamaJalanKodePos);
    }

    if (e.target.id === "Email") {
      SetDataEmail(e.target.value);
    }
    if (e.target.id === "Nomor") {
      SetDataNumber(e.target.value);
    }
    if (e.target.id === "noPolis") {
      if (DataPolis.length === 2 && Titik1 === true) {
        e.target.value = DataPolis + "." + e.target.value.substr(2);
        SetDataPolis(e.target.value);
        console.log(DataPolis);
        SetTitik1(false);
        // alert("sentuh 1")
      }
      if (DataPolis.length < 1 && Titik1 === false) {
        SetDataPolis(DataPolis);
        SetTitik1(true);
        // alert("sentuh 2")
      }
      if (DataPolis.length === 10 && Titik2 === true) {
        e.target.value = DataPolis + "." + e.target.value.substr(10);
        SetDataPolis(e.target.value);
        console.log(DataPolis);
        SetTitik2(false);
        // alert("sentuh 1")
      }
      if (DataPolis.length < 10 && Titik2 === false) {
        SetDataPolis(DataPolis);
        SetTitik2(true);
        // alert("sentuh 2")
      } else {
        SetDataPolis(e.target.value);
        console.log(DataPolis);
        // alert("sentuh 3")
      }
      // SetDataPolis(e.target.value);
    }

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

  const ChaptaFrom = (e) => {
    SetChapta(e);
    console.log(e);
  };

  const UploadFile = (e) => {
    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png"
    ) {
      if (e.target.files[0].size >= 2097152) {
        alert("File Terlalu Besar Max 2Mb");
        SetUploadStatus(false);
        e.target.value = null;
      } else {
        SetFileUpload(e.target.files[0]);
        SetUploadStatus(true);
        console.log(FileUpload);
        SetUrlFile(URL.createObjectURL(e.target.files[0]));
      }
    } else {
      alert(
        `Format { ${e.target.files[0].type} } Tidak Di Dukung Gunakan Jpeg/Png`
      );
      SetUploadStatus(false);
      e.target.value = null;
    }
  };

  const handleChangeWa = (e) => {
    SetChangeWa(e.target.value);
  };

  //Reload Data Pertama
  useEffect(() => {
    if (loginStatus === false) {
      // get Token
      let axios = require("axios");
      let config = {
        method: "post",
        url: "https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/login",

        data: {
          username: "george",
          password: "george12345",
        },
      };

      axios(config)
        .then(function (response) {
          // console.log(response.data.data.token);
          SetTokenLogin(response.data.data.token);
          SetloginStatus(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

  // Data polish On load

  useEffect(() => {
    if (DataPolis.length == 12) {
      // get polis
      var axios = require("axios");

      let config = {
        method: "get",
        url: `https://eli-uat-api.myequity.id/mobmyelife/services/api/v1/profile?search_query_1=${DataPolis}`,
        headers: {
          Authorization: `Bearer ${TokenLogin}`,
        },
        data: TokenLogin,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          localStorage.nama = response.data.data.policy_holder;
          localStorage.noPonsel = response.data.data.mobile_no;
          localStorage.Email = response.data.data.email;
          localStorage.NamaJalanRumah=response.data.data.address;
          localStorage.NamaJalanKota=response.data.data.city;
          localStorage.NamaJalanProfinsi=response.data.data.province;
          localStorage.NamaJalanKodePos=response.data.data.postal_code;
          console.log(localStorage);
          if (response.data.data.customer_id != "") {
            SetAllFrom("");
          } else {
            alert("salah");
          }
        })
        .catch(function (error) {
          alert("data tidak di temukan");

          SetAllFrom("hide");
        });
    } else {
      SetAllFrom("hide");
    }
  }, [DataPolis]);

// Final Submit
const SubmitFrom = () => {



localStorage.clear()
  };




























  // validasi Chapta
  // useEffect(() => {

  //   let axios = require("axios");
  //   let config = {
  //     method: "post",
  //     url: "www.google.com/recaptcha/api/siteverify",
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': '*',

  //     },
  //     data:
  //     {
  //       secret : "6LeB9VwaAAAAAMhoHFkA1O-nxCv3DDW10aqZqWxv",
  //       response : Chapta ,

  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(response);

  //     })
  //     .catch(function (error) {
  //       console.log(error);

  //     });

  // }, [Chapta])
  return (
    <div>
      {/* header Page Start */}
      <div className="HeaderPage">
        <img className="LogoEquity" src={Logo} alt="" />
        <h2 className="HeaderTitle">
          <b>From Pengkinian Data</b>
        </h2>
      </div>
      {/* <h4>Data Token</h4> */}
      {/* <h5>{localStorage.token}</h5> */}
      {/* Header Page End */}
      <div className="FromIsi">
        <form onSubmit={SubmitFrom}>
          {/* nomer Polis */}
          <div className="col nomerPolisWrap">
            <label htmlFor="noPolis">
              Nomor Polis [18.1012354.5] <span>*</span>
            </label>
            <input
              onChange={handleChangeAll}
              maxlength="12"
              type="text"
              id="noPolis"
              placeholder="Masukan Nomer Polis"
              required
            />
          </div>

          <div className={`ContainerShow ${AllFrom}`}>
            {/* Nama Lengkap */}
            <div className="col nameWrap">
              <label htmlFor="Name">
                Nama Lengkap <span>*</span>
              </label>

              <input
                onChange={handleChangeAll}
                type="text"
                id="Name"
                name="NamaLengkap"
                value={localStorage.nama}
                placeholder="masukan Nama Lengkap"
                required
                disabled
              />
            </div>
            {/* Nomor Ponsel */}
            <div className="col nomorWrap">
              <label htmlFor="Nomor">
                Nomor Ponsel / HP <span>*</span>
              </label>
              <input
                onChange={handleChangeAll}
                placeholder="Masukan Nomer Hp Anda"
                value={localStorage.noPonsel}
                type="number"
                id="Nomor"
                disabled
                required
              />
            </div>

            {/* Alamat Email */}
            <div className="col emailWrap">
              <label htmlFor="Email">
                Alamat E-mail<span>*</span>
              </label>
              <input
                placeholder="Masukan Alamat E-Mail"
                onChange={handleChangeAll}
                type="email"
                id="Email"
                disabled
                required
              />
            </div>
          </div>
          {/* Upoad Data */}
          <div className="col dataUpload">
            <label htmlFor="file">
              Upload Ktp <span>*</span>
            </label>
            <input onChange={UploadFile} type="file" name="file" />
            {UploadStatus ? (
              <div>
                <img src={UrlFile} />
                <p>Filename: {FileUpload.name}</p>
                <p>Filetype: {FileUpload.type}</p>
                <p>Size in bytes: {FileUpload.size}</p>
                {console.log(FileUpload)}
              
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
          </div>

          {/* Perubahan Data  */}
          <div className="PerubahanDataWrap">
            <div className="PerbuahanDataCheck">
              <label htmlFor="Email">
                <b> Jika Ada Peubahan Data</b>
              </label>
              <div className="checkboxwrap">
                <label>
                  <input
                    id="NomorHpBaru"
                    name="isGoing"
                    type="checkbox"
                    checked={HideCheck2 === "hide" ? false : true}
                    onChange={CheckbookAction}
                  />
                  <p>Nomor Hp Baru </p>
                </label>
              </div>
              <div className={`col nomorWa1 ${ChangeNumber}`}>
                <label htmlFor="Nomor">
                  Nomor Whatsapp Baru <span>*</span>
                </label>
                <input
                  type="number"
                  onChange={handleChangeAll}
                  name="NumberChange"
                  id="NumberChange"
                />
              </div>
              <div className="checkboxwrap">
                <label>
                  <input
                    id="EmailBaru"
                    name="isGoing"
                    type="checkbox"
                    checked={HideCheck3 === "hide" ? false : true}
                    onChange={CheckbookAction}
                  />
                  <p>E-mail Baru</p>
                </label>
              </div>
              <div className={`col nomorWa1 ${ChangeEmail}`}>
                <label htmlFor="Nomor">
                  Email Baru <span>*</span>
                </label>
                <input
                  type="email"
                  onChange={handleChangeAll}
                  name="EmailChange"
                  id="EmailChange"
                />
              </div>
            </div>
          </div>
          {/* Perubahan Data End */}
          {/*Terhubung Wa  */}
          <div className="col selectlWrap">
            <label htmlFor="Email">
              Apakah no Hp anda Terhubung dengan No Whatsapp <span>*</span>
            </label>
            <select onChange={handleChangeWa}>
              <option value="hide"></option>
              <option selected id="option1" value="hide">
                ya
              </option>
              <option id="option2" value="show">
                Tidak
              </option>
            </select>
          </div>
          {/* no Wa baru  */}
          <div className={`col nomorWrap2 ${ChangeWa}`}>
            <label htmlFor="Nomor">
              Nomor Whatsapp <span>*</span>
            </label>
            <input
              type="number"
              onChange={handleChangeAll}
              name="NomerWhatsappTerbaru"
              id="NomerWhatsappTerbaru"
            />
          </div>
          {/* Checkbox */}
          {/* Checkbook Triger */}
          <div className="col checkboxlWrap ">
            <label>
              <input
                id="emailCheck"
                name="isGoing"
                type="checkbox"
                checked={Hide === "hide" ? false : true}
                onChange={CheckbookAction}
              />
              <p>Jika Ada Perubahan Pada Alamat Korespondensi </p>
            </label>
            {/* Checkboox From */}

            <div className={`col checkbookFrom ${Hide}`}>
              <label htmlFor="checkbookFrom ">
                Alamat Korespondensi <span> *</span>
              </label>
              {/* nama jaalan dan rumah  */}
              <input type="text"
              placeholder={"Tempat Tinggal Sekarag  : " +  (localStorage.NamaJalanRumah !==undefined ? localStorage.NamaJalanRumah : "Data Kosong") }
              onChange={handleChangeAll}
              id="namaJalan" />
              <label htmlFor="namaJalan"> Nama Jalan,No Rumah/Unit</label>
              {/* kecamatan */}
              <input type="text" onChange={handleChangeAll}
                placeholder={"Kecamatan Tinggal Sekarag  : " +  (localStorage.NamaJalanKecamatan !==undefined ? localStorage.NamaJalanKecamatan : "Data Kosong") }
              id="namaJalan2" />
              <label htmlFor="namaJalan2"> Kecamatan</label>
              {/* kota */}
              <div className="KotaProf">
                <div className="kota">
                  <input
                    type="text"
                    placeholder={"Kota Tinggal Sekarag  : " +
                    (localStorage.NamaJalanKota !==undefined ?     localStorage.NamaJalanKota : "Data Kosong")  }
                    onChange={handleChangeAll}
                    id="namaJalan3"
                  />
                  <label htmlFor="namaJalan3"> Kota</label>
                </div>
                <div className="prof">
                  <input
                    type="text"
                    placeholder={"Provinsi Tinggal Sekarag  : " +
                 (   localStorage.NamaJalanProfinsi !==undefined ?     localStorage.NamaJalanProfinsi : "Data Kosong" )}
                    onChange={handleChangeAll}
                    id="namaJalan4"
                  />
                  <label htmlFor="namaJalan4"> provinsi</label>
                </div>
              </div>
              {/* kode Pos */}
              <input
                className="kodePos"
                type="text"
                placeholder={"Kode Pos Sekarag  : " +
               ( localStorage.NamaJalanKodePos !==undefined ?     localStorage.NamaJalanKodePos : "Data Kosong")
                }
                onChange={handleChangeAll}
                id="namaJalan5"
              />
              <label htmlFor="namaJalan5"> Kode Pos</label>
            </div>
          </div>
          {/* checkbook end  */}
          {/* persetujuan */}
          <div className="Persetujuan">
            <h4>
              <b>Persetujuan ,</b>
            </h4>
            <br />
            <br />
            <p>
              Saya Menyatakan bahwa informasi yang tertera dalam formulir ini
              adalah benar dan
            </p>
            <p>
              saya setuju untuk menyesuaikan data Polis saya sesuai dengan
              informasi yang
            </p>
            <p>tercantum dalam formulir ini.</p>
            <br />
            <p>
              Apabila data yang saya berikan tidak benar mmaka saya bertanggung
              jawab penuh atas{" "}
            </p>
            <p>kesalahan tersebut.</p>

            <div className="checkboxlWrap">
              <label>
                <input
                  name="Persetujuan"
                  id="Persetujuan"
                  type="checkbox"
                  checked={CheckPersetujuan === "hide" ? false : true}
                  onChange={CheckbookAction}
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
                />
                <p>
                  Saya Menyetujui <span>*</span>
                </p>
              </label>
            </div>
          </div>
          {/* verivikasi Chapta */}
          <div className="col nomorWrap">
            <label htmlFor="Nomor">
              Mohon verivikasi Diri anda <span>*</span>
            </label>

            <ReCAPTCHA
              onChange={ChaptaFrom}
              theme="light"
              type="image"
              sitekey={Sitekey}
            />
          </div>

          <button className="btn-Submit" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
