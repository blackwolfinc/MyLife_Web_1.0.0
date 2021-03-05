import React, { forwardRef } from "react";
import axios from "axios";
import "../Assets/Css/LandingPage.scss";
import "../Assets/Css/Checklist.scss";
import Logo from "../Assets/Img/Logo.jpg";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from "mdbreact";
import { useHistory } from "react-router-dom";

export const Page1 = () => {
  // Token
  const history = useHistory();
  const [TokenLogin, SetTokenLogin] = useState("");
  const [loginStatus, SetloginStatus] = useState(false);

  // Chapta
  const [Chapta, SetChapta] = useState("");
  const [Sitekey, SetSitekey] = useState(
    "6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
  );
  const [SitekeyPost, SetSitekeypost] = useState(
    "6LeB9VwaAAAAAMhoHFkA1O-nxCv3DDW10aqZqWxv"
  );

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
  const [Loader, SetLoader] = useState("hide");
  const [LoaderWrap, SetLoaderWrap] = useState("hide");

  //Set Hide and pop Up Modals
  const [ModalState, SetModalState] = useState(false);
  const [ModalStateTes, SetModalStateTes] = useState(false);

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
  const [NamaJalanKodePos, SetNamaJalanKodePos] = useState("");
  const [NamaJalanKota, SetNamaJalanKota] = useState("");
  const [NamaJalanProfinsi, SetNamaJalanProfinsi] = useState("");
  const [NamaJalanKecamatan, SetNamaJalanKecamatan] = useState("");
  const [NamaJalanRumah, SetNamaJalanRumah] = useState("");

  // Data Otp
  const [OtpValue, SetOtpValue] = useState("");
  const [SendDataFinal, SetSendDataFinal] = useState(false);

  // Untuk Data Update
  const [DataNumberBaru, SetDataNumberBaru] = useState(0);
  const [DataEmailBaru, SetDataEmailBaru] = useState("");
  const [NomerWhatsapp, SetNomerWhatsapp] = useState("");
  const [PersetujuanValid, SetPersetujuanValid] = useState(false);

  //Handle input Checkbox
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
    }
    if (e.target.id === "emailCheck" && Hide === "") {
      SetHideAlternative("hide");
      SetAlternativeCheck("true");
    }
    if (e.target.id === "Persetujuan" && CheckPersetujuan === "hide") {
      SetCheckPersetujuan("");
      SetPersetujuanValid(true);
    }
    if (e.target.id === "Persetujuan" && CheckPersetujuan === "") {
      SetCheckPersetujuan("hide");
      SetPersetujuanValid(false);
    }
  };

  // Hendel Change Inputan
  const handleChangeAll = (e) => {
    //OTP Input

    if (e.target.id === "InputOTP") {
      SetOtpValue(e.target.value);
    }
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
      SetNamaJalanRumah(e.target.value);

      // console.log(NamaJalanRumah);
    }
    if (e.target.id === "namaJalan2" && Hide === "") {
      SetNamaJalanKecamatan(e.target.value);

      // console.log(NamaJalanKecamatan);
    }
    if (e.target.id === "namaJalan3" && Hide === "") {
      SetNamaJalanKota(e.target.value);

      // console.log(NamaJalanKota);
    }
    if (e.target.id === "namaJalan4" && Hide === "") {
      SetNamaJalanProfinsi(e.target.value);

      // console.log(NamaJalanProfinsi);
    }
    if (e.target.id === "namaJalan5" && Hide === "") {
      SetNamaJalanKodePos(e.target.value);

      // console.log(NamaJalanKodePos);
    }

    if (e.target.id === "Email") {
      SetDataEmail(e.target.value);
    }
    if (e.target.id === "Nomor") {
      SetDataNumber(e.target.value);
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
  //Hendle Inputan Chapta
  const ChaptaFrom = (e) => {
    SetChapta(e);
  };

  // Hendle Upload FIle
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
        // console.log(FileUpload);
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

  // Hendle Perubahan Wa Select Button
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
          SetTokenLogin(response.data.data.token);
          SetloginStatus(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

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
          contentType: "application/json",
        },
        data: TokenLogin,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          // Penempatan Data Pada Hook
          SetDataNama(response.data.data.policy_holder);
          SetDataNumber(response.data.data.mobile_no);
          SetDataEmail(response.data.data.email);
          SetNamaJalanRumah(response.data.data.address);
          SetNamaJalanKota(response.data.data.city);
          SetNamaJalanProfinsi(response.data.data.province);
          SetNamaJalanKodePos(response.data.data.postal_code);
          if (response.data.data.customer_id !== "") {
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

  // sumbit Data Baru Setelah OTp
  useEffect(() => {
    if (SendDataFinal === true) {
      // Api Untuk Send KE form
      SetLoader("loader");
      SetLoaderWrap("loaderWrap");
      var formdata = new FormData();
      formdata.append("changeAddressCode", "001");
      formdata.append("policyNo", "1234567");
      formdata.append("policyHolder", DataNama);
      formdata.append("handphoneNo", DataNumber);
      formdata.append("emailAddress", DataEmail);
      formdata.append("changeData", "1");
      formdata.append("newHandphoneNo", DataNumberBaru);
      formdata.append("whatsappNumber", "1");
      formdata.append("whatsappNo", NomerWhatsapp);
      formdata.append("newEmailAddress", DataEmailBaru);
      formdata.append("changeAddress", "1");
      formdata.append("address1", NamaJalanRumah);
      formdata.append("address2", NamaJalanRumah);
      formdata.append("address3", NamaJalanRumah);
      formdata.append("cityCode", NamaJalanKota);
      formdata.append("stateCode", "001");
      formdata.append("postalCode", NamaJalanKodePos);
      formdata.append("countryCode", "001");
      formdata.append("faxNo", "0215432");
      formdata.append("phoneNo", DataNumber);
      formdata.append("file", FileUpload);
      formdata.append("active", "1");
      formdata.append("transactionCode", "001");
      formdata.append("transactionStatus", "active");

      var requestOptions = {
        method: "POST",
        body: formdata,
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
          // alert(response)
          SetLoader("hide");
          SetLoaderWrap("hide");
          history.push("TanksPage");
          //  console.log(response.message)
        })
        .catch((error) => alert("error", error));
    } else {
      //  alert("eror Post")
    }
  }, [SendDataFinal]);

  // Final Submit
  const SubmitFrom = () => {
    if (
      Chapta !== "" &&
      PersetujuanValid === true &&
      DataPolis.length >= 12 &&
      DataNama !== "" &&
      UploadStatus === true
    ) {
      SetModalState(true);

      // data yang di submit
    }
    if (Chapta === "") {
      alert("Silakan Isi Chapta ");
      document.getElementById("RechaptaFrom").focus();
    }
    if (PersetujuanValid === false) {
      alert("Silakan Click Tanda Persetujuan ");
      document.getElementById("Persetujuan").focus();
    }
    if (UploadStatus === false) {
      alert("Silakan Upload Foto Dahulu ");

      document.getElementById("UploadFileInput").focus();
    }

    if (DataPolis.length < 12) {
      alert("Isi Nomer Polis Terlebih Dahulu");
      document.getElementById("noPolis").focus();
    } else {
    }
  };

  // OTP Section
  const ModalTogller = () => {
    if (ModalState === false) {
      SetModalState(true);
    } else {
      SetModalState(false);
    }
  };

  const OtpEmail = () => {
    alert("OTP Dikirimkan Lewat E-mail");
  };

  const OtpSMS = () => {
    alert("OTP Dikirimkan Lewat SMS / whatsaap");
  };

  const OtpValidation = () => {
    if (
      OtpValue === "1234" &&
      ModalState === true &&
      Chapta !== "" &&
      PersetujuanValid === true
    ) {
      alert("Kode OTP Benar");
      SetSendDataFinal(true);
    }
    if (
      OtpValue !== "1234" &&
      ModalState === true &&
      Chapta !== "" &&
      PersetujuanValid === true
    ) {
      alert("kode OTP salah ");
    }
  };
  return (
    <>
      <div className={`${LoaderWrap}`}>
        <div class={`${Loader}`}></div>
      </div>
      <div className="WrapperPage1">
        {/* header Page Start */}

        <div className="HeaderPage">
          <img className="LogoEquity" src={Logo} alt="" />
          <h2 className="HeaderTitle">
            <b>From Pengkinian Data</b>
          </h2>
        </div>
        {/* Header Page End */}
        <div className="FromIsi">
          {/* nomer Polis */}
          <div className="col nomerPolisWrap">
            <label htmlFor="noPolis">
              Nomor Polis [18.1012354.5] <span>*</span>
            </label>
            <input
              onChange={handleChangeAll}
              autoFocus
              maxLength="12"
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
                value={DataNama}
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
                value={DataNumber}
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
                value={DataEmail}
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
            <input
              id="UploadFileInput"
              className="fileInputCostum"
              onChange={UploadFile}
              type="file"
              name="file"
            />
            {UploadStatus ? (
              <div>
                <img src={UrlFile} />
              </div>
            ) : (
              <p></p>
            )}
          </div>

          {/* Perubahan Data  */}
          <div className="PerubahanDataWrap2">

            <div className="PerbuahanDataCheck">
              <fieldset>
                <legend>Jika Ada Perubahan Data :</legend>
                <br/>
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
                  <input
                    placeholder={`Nomor Hp Lama : ${DataNumber}`}
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
                  <input
                    placeholder={`Email Lama : ${DataEmail} `}
                    type="email"
                    onChange={handleChangeAll}
                    name="EmailChange"
                    id="EmailChange"
                  />
                </div>
                {/* Checkbook Triger */}
                <div className=" checkboxlWrap ">
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
                    {/* Nama Jalan dan rumah  */}
                    <input
                      type="text"
                      placeholder={
                        "Tempat    : " +
                        (NamaJalanRumah !== undefined
                          ? NamaJalanRumah
                          : "Data Kosong")
                      }
                      onChange={handleChangeAll}
                      id="namaJalan"
                    />
                    <label htmlFor="namaJalan"> Nama Jalan,No Rumah/Unit</label>
                    {/* kecamatan */}
                    <input
                      type="text"
                      onChange={handleChangeAll}
                      placeholder={
                        "Kecamatan    : " +
                        (NamaJalanKecamatan !== undefined
                          ? NamaJalanKecamatan
                          : "Data Kosong")
                      }
                      id="namaJalan2"
                    />
                    <label htmlFor="namaJalan2"> Kecamatan</label>
                    {/* kota */}
                    <div className="KotaProf">
                      <div className="kota">
                        <input
                          type="text"
                          placeholder={
                            "Kota    : " +
                            (NamaJalanKota !== undefined
                              ? NamaJalanKota
                              : "Data Kosong")
                          }
                          onChange={handleChangeAll}
                          id="namaJalan3"
                        />
                        <label htmlFor="namaJalan3"> Kota</label>
                      </div>
                      <div className="prof">
                        <input
                          type="text"
                          placeholder={
                            "Provinsi    : " +
                            (NamaJalanProfinsi !== undefined
                              ? NamaJalanProfinsi
                              : "Data Kosong")
                          }
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
                      placeholder={
                        "Kode Pos   : " +
                        (NamaJalanKodePos !== undefined
                          ? NamaJalanKodePos
                          : "Data Kosong")
                      }
                      onChange={handleChangeAll}
                      id="namaJalan5"
                    />
                    <label htmlFor="namaJalan5"> Kode Pos</label>
                  </div>
                </div>

                {/* checkbook end  */}
              </fieldset>
            </div>
            <hr />
            {/* Perubahan Data End */}
            {/*Terhubung Wa  */}
            <div className="col selectlWrap">
              <label htmlFor="Email">
                Apakah no Hp anda Terhubung dengan No Whatsapp <span>*</span>
              </label>
              <select onChange={handleChangeWa}>
                <option defaultValue id="option1" value="hide">
                  Terhubung dengan No Whatsapp
                </option>
                <option id="option2" value="show">
                  Tidak Terhubung dengan No Whatsapp
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
          </div>
          {/* persetujuan */}

          <hr />
          <div className="Persetujuan PerubahanDataWrap">
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
            <hr />
            <div className="checkboxlWrap">
              <label>
                <input
                  name="Persetujuan"
                  id="Persetujuan"
                  type="checkbox"
                  checked={CheckPersetujuan === "hide" ? false : true}
                  onChange={CheckbookAction}
                />
                <p>
                  Saya Menyetujui <span>*</span>
                </p>
              </label>
              {/* check Validation */}
            </div>
          </div>
          <hr />
          {/* verivikasi Chapta */}
          <div className="col nomorWrap">
            <label htmlFor="Nomor">
              Mohon verivikasi Diri anda <span>*</span>
            </label>

            <ReCAPTCHA
              onChange={ChaptaFrom}
              theme="light"
              type="image"
              id="RechaptaFrom"
              sitekey={Sitekey}
            />
          </div>

          <button className="btn-Submit" type="submit" onClick={SubmitFrom}>
            SUBMIT
          </button>

          {/* Modal  */}
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

              <div className="btnModalGroup">
                <button onClick={OtpEmail}> Send By Email</button>
                <button onClick={OtpSMS}> Send By No Handpone</button>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={ModalTogller}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" onClick={OtpValidation}>
                Validation
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
      </div>
    </>
  );
};
