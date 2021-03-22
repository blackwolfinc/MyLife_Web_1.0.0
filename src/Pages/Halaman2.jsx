import React from "react";
import { editData } from "../Redux/Action/editData";
import { editStatus } from "../Redux/Action/loginStatus";
import logo from "../Assets/Img/Logo.jpg";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { UploadFileDrop } from "./Components/UploadFileDrop";
import { MiniCrausel } from "./Components/MiniCrausel";
import { connect, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import logoKecil1 from "../Assets/Img/Icon/ico-user-12-x-12.png";
import "../Assets//Css/pages/Pages2.scss";

export const Halaman2 = () => {
  const history = useHistory();
  const Dispatch = useDispatch();
  // ==============================================================
  // Data Master
  // ==============================================================
  // Load Data Indictor :
  const [LoadData, SetLoadData] = useState(false);
  const [LoadDataNegara, SetLoadDataNegara] = useState();

  //Upload File
  const [FileUpload, SetFileUpload] = useState({});
  const [FileName, SetFileName] = useState("");
  const [UploadStatus, SetUploadStatus] = useState(false);
  const [UrlFile, SetUrlFile] = useState();

  // hide anda pop up parameter
  const [HidePerubahanPP, setHidePerubahanPP] = useState("hide");
  const [HidePerubahanKK, setHidePerubahanKK] = useState("hide");
  const [HidePerubahanKKWa, setHidePerubahanKKWa] = useState("hide");
  const [HidePerubahanAL, setHidePerubahanAL] = useState("hide");
  // Contoh Data From Reudx
  const DataUserAwal = useSelector((state) => state.getdataAll.userPolis);
  const UserNoPolis = useSelector((state) => state.editDataReducers.no_polis);
  const UserNoPolisData = useSelector((state) => state.editDataReducers.data);
  const Checklogin = useSelector(
    (state) => state.loginDataReducers.loginStatus
  );
  const CheckEditStatus = useSelector(
    (state) => state.loginDataReducers.editStatusLook
  );
  // data
  const [DataPolis, SetDataPolis] = useState(UserNoPolis);
  const [DataNumber, SetDataNumber] = useState(DataUserAwal.mobile_no);
  const [DataEmail, SetDataEmail] = useState(DataUserAwal.email);
  const [NamaJalanKodePos, SetNamaJalanKodePos] = useState(
    DataUserAwal.postal_code
  );
  const [NamaJalanKota, SetNamaJalanKota] = useState(DataUserAwal.city);
  const [NamaJalanProfinsi, SetNamaJalanProfinsi] = useState(
    DataUserAwal.province
  );
  const [NamaJalanKecamatan, SetNamaJalanKecamatan] = useState(
    DataUserAwal.address
  );
  const [NamaJalanRumah, SetNamaJalanRumah] = useState(DataUserAwal.country);
  // Untuk Data Update
  const [DataNumberBaru, SetDataNumberBaru] = useState(0);
  // Value Select 2

  // if (CheckEditStatus === true ) {
  //     alert(" cehek true")
  // }
  // if(CheckEditStatus === false ){
  //   alert("salah")
  // }

  const options = [
    { value: "Amerika", label: "Amerika" },
    { value: "Engris", label: "Engris" },
  ];
  // ==============================================================
  // Load Data
  // ==============================================================
  useEffect(() => {
    if (LoadData === false) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: "https://myelife-web-customer.herokuapp.com/api/v1/countries",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      // Load Data Ke 2
      var config = {
        method: "get",
        url: "https://myelife-web-customer.herokuapp.com/api/v1/states",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const [SendAllData, SetSendAllData] = useState({
    InputNamaPemegangPolis:
      CheckEditStatus === false
        ? DataUserAwal.policy_holder
        : UserNoPolisData.InputNamaPemegangPolis,
    InputNomorHandponePemegangPolis:
      CheckEditStatus === false
        ? DataNumber
        : UserNoPolisData.InputNomorHandponePemegangPolis,
    EmailChange:
      CheckEditStatus === false
        ? DataEmail
        : UserNoPolisData.EmailChange,
    UploadFileInput:
      CheckEditStatus === false
        ? UrlFile
        : UserNoPolisData.UploadFileInput,
    namaJalanAddres1:
      CheckEditStatus === false
        ? NamaJalanKecamatan
        : UserNoPolisData.namaJalanAddres1,
    namaJalanAddres2:
      CheckEditStatus === false
        ? NamaJalanKecamatan
        : UserNoPolisData.namaJalanAddres2,
    namaJalanKota:
      CheckEditStatus === false
        ? NamaJalanKota
        : UserNoPolisData.namaJalanKota,
    namaJalanKecamatan:
      CheckEditStatus === false
        ? ""
        : UserNoPolisData.namaJalanKecamatan,
    namaJalanKelurahan:
      CheckEditStatus === false
        ? ""
        : UserNoPolisData.namaJalanKelurahan,
    namaJalanKodePos:
      CheckEditStatus === false
        ?NamaJalanKodePos
        : UserNoPolisData.namaJalanKodePos,
    UploadFileInput:
      CheckEditStatus === false
        ? UrlFile
        : UserNoPolisData.UploadFileInput,
    nomorHpTelepone:
        CheckEditStatus === false
          ? DataNumber
          : UserNoPolisData.nomorHpTelepone,
    nomorHpWA:
          CheckEditStatus === false
            ? DataNumberBaru
            : UserNoPolisData.nomorHpWA,
  });

  // ==============================================================
  // Hendel Inputan
  // ==============================================================
  // Hendel Change Inputan
  const handleChangeAll = (e) => {
    if (
      e.target.id === "InputNamaPemegangPolis" &&
      HidePerubahanPP === "show"
    ) {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
    }
    if (
      e.target.id === "InputNomorHandponePemegangPolis" &&
      HidePerubahanKK === "show"
    ) {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
    }

    if (e.target.id === "EmailChange" && HidePerubahanKK === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
    }

    // nama jalan

    if (e.target.id === "namaJalanAddres1" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
      // console.log(NamaJalanRumah);
    }
    if (e.target.id === "namaJalanAddres2" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });

      // console.log(NamaJalanKecamatan);
    }
    if (e.target.id === "namaJalanKota" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });

      // console.log(NamaJalanKota);
    }
    if (e.target.id === "namaJalanKecamatan" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });

      // console.log(NamaJalanProfinsi);
    }
    if (e.target.id === "namaJalanKelurahan" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });

      // console.log(NamaJalanKodePos);
    }
    if (e.target.id === "namaJalanKodePos" && HidePerubahanAL === "show") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });

      // console.log(NamaJalanKodePos);
    }

    if (e.target.id === "Email") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
    }
    if (e.target.id === "Nomor") {
      SetSendAllData({ ...SendAllData, [e.target.id]: e.target.value });
    }
  };

  // ==============================================================
  // Fungsi Fungsi
  // ==============================================================

  const onDropCostum = (e) => {
    e.preventDefault();
    SetFileUpload(e.dataTransfer.files[0]);
    SetUrlFile(URL.createObjectURL(e.dataTransfer.files[0]));
    SetFileName(e.dataTransfer.files[0].name);
    SetSendAllData({
      ...SendAllData,
      UploadFileInput: URL.createObjectURL(e.dataTransfer.files[0]),
    });
    SetUploadStatus(true);
  };

  const onDropCostum2 = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files[0]);
  };

  // Anti Bypas
  const AntiBypass = () => {
    if (Checklogin !== true) {
      history.push("");
    }
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
        SetSendAllData({
          ...SendAllData,
          [e.target.id]: URL.createObjectURL(e.target.files[0]),
        });
        // console.log(UrlFile);
        SetFileName(e.target.files[0].name);
      }
    } else {
      alert(
        `Format { ${e.target.files[0].type} } Tidak Di Dukung Gunakan Jpeg/Png`
      );
      SetUploadStatus(false);
      e.target.value = null;
    }
  };

  // ==============================================================
  // Fungsi Frontend
  // ==============================================================

  // Hendel Hide And popup
  const ChaneAllTrans = (e) => {
    if (e.target.id === "PemegangPolis" && HidePerubahanPP === "show") {
      setHidePerubahanPP("hide");
      console.log(LoadDataNegara);
    }
    if (e.target.id === "PemegangPolis" && HidePerubahanPP === "hide") {
      setHidePerubahanPP("show");
    }
    if (e.target.id === "PerubahanKontak" && HidePerubahanKK === "show") {
      setHidePerubahanKK("hide");
    }
    if (e.target.id === "PerubahanKontak" && HidePerubahanKK === "hide") {
      setHidePerubahanKK("show");
    }
    if (e.target.id === "PerubahanAlamat" && HidePerubahanAL === "show") {
      setHidePerubahanAL("hide");
    }
    if (e.target.id === "PerubahanAlamat" && HidePerubahanAL === "hide") {
      setHidePerubahanAL("show");
    }
    if (
      e.target.id === "NomorWhatsAppPemegangPolis" &&
      HidePerubahanKKWa === "hide"
    ) {
      setHidePerubahanKKWa("show");
      SetDataNumberBaru(DataNumber);
    }
    if (
      e.target.id === "NomorWhatsAppPemegangPolis" &&
      HidePerubahanKKWa === "show"
    ) {
      setHidePerubahanKKWa("hide");
      SetDataNumberBaru("");
    }
  };

  // ==============================================================
  // On Submit
  // ==============================================================

  const HendleSubmit = (e) => {
    if (e.target.id === "ValidationButton") {
      Dispatch(editData(SendAllData));
      Dispatch(editStatus(true));

      history.push("page3");
    }

    if (e.target.id === "backButton") {
      history.push("/");
    }
  };

  return (
    <div className="ContainerDefaultSec">
      {AntiBypass()}

      {/* Container Kiri  */}
      <div className="ContainerKiri">
        {/* Logo Container*/}
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        {/* Mini Crausel */}
        <div className="ContainerCrausel">
          <MiniCrausel />
        </div>
      </div>

      <div className="ContainerKanan">
        {/* Title page */}
        <div className="TitlePage">
          <h3>Formulir Pengkinian Data</h3>
          <p>Harap isi seluruh field dibawah</p>
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
                <b>{DataPolis}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Nama Pemegang Polis</p>
              <p className="hasil">
                <b>{DataUserAwal.policy_holder}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>No. Handphone</p>
              <p className="hasil">
                <b>{DataNumber}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Email</p>
              <p className="hasil">
                <b>{DataEmail}</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Korespondensi</p>
              <p className="hasil">
                <b>
                  {NamaJalanKecamatan +
                    ", " +
                    NamaJalanKota +
                    "," +
                    NamaJalanProfinsi +
                    "," +
                    NamaJalanKodePos +
                    "," +
                    NamaJalanRumah}
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis */}
        {/* Checkbox Perubahan Datta */}
        <div className="PerubahanDataCheck">
          <div className="PerubahanDataPemegangPolis-Check ">
            <input
              checked={HidePerubahanPP === "hide" ? false : true}
              name="PemegangPolis"
              id="PemegangPolis"
              onChange={ChaneAllTrans}
              type="checkbox"
            />{" "}
            <h4>Perubahan Nama Pemegang Polis</h4>
          </div>
          {/* Inputan Perubahan Data  */}
          <div className={`InputWrap ${HidePerubahanPP}`}>
            <p>Nama Lengkap Pemegang Polis</p>

            <div className="inputanWraperIsi nameKhusus">
              <i className="fas fa-user"></i>
              <input
                placeholder={DataUserAwal.policy_holder}
                onChange={handleChangeAll}
                id="InputNamaPemegangPolis"
                name="InputNamaPemegangPolis"
                type="text"
              ></input>
            </div>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis2 */}
        {/* Checkbox Perubahan Data  2*/}
        <div className="PerubahanDataCheck">
          <div className="PerubahanKontakPemegangPolis-Check">
            <input
              type="checkbox"
              onChange={ChaneAllTrans}
              name="PerubahanKontak"
              id="PerubahanKontak"
            />{" "}
            <h4>Perubahan Kontak Pemegang Polis</h4>
          </div>
          {/* Inputan Perubahan Data  2 */}
          {/* Inputan Nomor Handpone   */}
          <div className={`InputWrap ${HidePerubahanKK}`}>
            <p htmlFor="InputNamaPemegangPolis">
              Nomor Handphone Pemegang Polis
            </p>
            <div className="inputanWraperIsi">
              <i className="fas fa-phone-alt">
                <p>+62</p>
              </i>
              <input
                onChange={handleChangeAll}
                id="InputNomorHandponePemegangPolis"
                name="InputNomorHandponePemegangPolis"
                type="number"
                placeholder={DataNumber}
              ></input>
            </div>
          </div>
          {/* Inputan Nomor wa   */}
          <div className={`InputWrap ${HidePerubahanKK}`}>
            <p htmlFor="InputNamaPemegangPolis">
              Nomor WhatsApp Pemegang Polis
            </p>
            <div className="inputanWraperIsi">
              <i className="fas fa-phone-alt">
                {" "}
                <p>+62</p>
              </i>
              <input
                id="NomorWhatsAppPemegangPolis"
                name="NomorWhatsAppPemegangPolis"
                onChange={handleChangeAll}
                type="number"
                {...(HidePerubahanKKWa === "hide" ? "disabled" : <b>flase</b>)}
                value={DataNumberBaru}
                placeholder={DataNumberBaru}
              ></input>
            </div>
          </div>
          <div
            className={`PerubahanKontakPemegangPolis-Check  ${HidePerubahanKK}`}
          >
            {/*  Kondisi jika no hp sama dengan whatsap   */}
            <input
              onChange={ChaneAllTrans}
              name="NomorWhatsAppPemegangPolis"
              id="NomorWhatsAppPemegangPolis"
              type="checkbox"
            />{" "}
            <h4>Nomor WhatsApp sama dengan Nomor Handphone</h4>
          </div>
          <div className={`InputWrap ${HidePerubahanKK}`}>
            <p htmlFor="InputNamaPemegangPolis">Email Pemegang Polis</p>
            <div className="inputanWraperIsi ">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChangeAll}
                id="EmailChange"
                name="EmailChange"
                type="text"
                placeholder={DataEmail}
              ></input>
            </div>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis */}
        <div className="PerubahanDataCheck">
          <div className="PerubahanAlamatPemegangPolis-Check">
            <input
              onChange={ChaneAllTrans}
              name="PerubahanAlamat"
              id="PerubahanAlamat"
              type="checkbox"
              checked={HidePerubahanAL === "hide" ? false : true}
            />
            <h4>Perubahan Alamat Korespondensi Pemegang Polis</h4>
          </div>
          <div className={HidePerubahanAL}>
            {/* Alamat negara*/}
            <hr />
            <div className={`AlamatWraper `}>
              <p>Alamat Korespondensi Pemegang Polis</p>
              <input
                onChange={handleChangeAll}
                id="namaJalanAddres1"
                placeholder={NamaJalanKecamatan}
              ></input>
              <input
                onChange={handleChangeAll}
                id="namaJalanAddres2"
                placeholder="Masukkan RT/RW atau Nama Bangunan/Gedung"
              ></input>
              <p>Negara</p>
              <Select options={options} />
            </div>
            {/* Alamat profinsi*/}
            <div className="AlamatWrapProf">
              <div className="AlamatKanan">
                <p>Provinsi</p>
                <Select options={options} />
              </div>
              {/* Alamat kota*/}
              <div className="AlamatKiri">
                <p>Kota</p>
                <input
                  id="namaJalanKota"
                  onChange={handleChangeAll}
                  type="text"
                  placeholder={NamaJalanKota}
                ></input>
              </div>
            </div>
            {/* Alamat  kecamatan*/}
            <div className="AlamatWrapProf">
              <div className="AlamatKanan">
                <p>Kecamatan</p>
                <input
                  id="namaJalanKecamatan"
                  onChange={handleChangeAll}
                  type="text"
                  placeholder="Masukkan Nama Kecamatan"
                ></input>
              </div>
              {/* Alamat Kelurahan*/}
              <div className="AlamatKiri">
                <p>Kelurahan</p>
                <input
                  id="namaJalanKelurahan"
                  onChange={handleChangeAll}
                  type="text"
                  placeholder="Masukkan Nama Kelurahan"
                ></input>
              </div>
            </div>
            {/* Alamat  kode pos*/}
            <div className="InputWrap">
              <p htmlFor="InputNamaPemegangPolis">Kode Pos</p>
              <div className="inputanWraperIsi">
                <input
                  id="namaJalanKodePos"
                  onChange={handleChangeAll}
                  name="InputNamaPemegangPolis"
                  type="text"
                  placeholder={NamaJalanKodePos}
                ></input>
              </div>
            </div>
          </div>
        </div>
        {/* Upload Ktp */}
        <div className="PerubahanDataCheck">
          <div className="DataDiriTerakhir">
            <span>
              <i className="fas fa-id-card"></i>
            </span>{" "}
            <p>Unggah Kartu Identitas Penduduk</p>
          </div>
          {/* Attach  Component File Upload*/}
          <div className="UKGroup">
            {UploadStatus ? (
              <div className="ContainerImageUpload">
                <img src={UrlFile} />
              </div>
            ) : (
              <div
                onDragOver={onDropCostum2}
                onDrop={onDropCostum}
                className="DragCostum"
                id="UploadFileInput"
              >
                <div className="iconTengah">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p> Drag and Drop File</p>
                </div>{" "}
              </div>
            )}
            <div className="UKButtonGroup">
              <label>
                <input
                  id="UploadFileInput"
                  className="fileInputCostum"
                  onChange={UploadFile}
                  type="file"
                  name="file"
                />
                <span className="btn-Unggah">Unggah KTP</span>

                {FileName != "" ? (
                  <p>{FileName}</p>
                ) : (
                  <p>"Tidak ada file yang dIpilih"</p>
                )}
              </label>
            </div>
          </div>
        </div>
        {/* btn Lanjut Dan back  */}
        <div className="ButtonGroupNav">
          <button onClick={HendleSubmit} id="backButton" className="button2">
            <i className="far fa-arrow-alt-circle-left"></i> Kembali
          </button>
          <button
            id="ValidationButton"
            onClick={HendleSubmit}
            className="button1"
          >
            Lanjutkan <i className="far fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
