import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { UploadFileDrop } from "./Components/UploadFileDrop";
import { MiniCrausel } from "./Components/MiniCrausel";
import { useState, useEffect } from "react";
import logoKecil1 from "../Assets/Img/Icon/ico-user-12-x-12.png";
import "../Assets//Css/pages/Pages2.scss";

export const Halaman2 = () => {
  const history = useHistory();

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
  const [HidePerubahanAL, setHidePerubahanAL] = useState("hide");
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
  // Untuk Data Update
  const [DataNumberBaru, SetDataNumberBaru] = useState(0);
  const [DataEmailBaru, SetDataEmailBaru] = useState("");
  const [NomerWhatsapp, SetNomerWhatsapp] = useState("");
  const [PersetujuanValid, SetPersetujuanValid] = useState(false);
  // Value Select 2

  const options = [

    { value: "Amerika", label: "Amerika" },
    { value: "Engris", label: "Engris" },

  ];
  // ==============================================================
  // Load Data
  // ==============================================================
      useEffect(() => {
          if (LoadData === false ) {

          var axios = require('axios');
          var config = {
            method: 'get',
            url: 'https://myelife-web-customer.herokuapp.com/api/v1/countries',
            headers: { }
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
            method: 'get',
            url: 'https://myelife-web-customer.herokuapp.com/api/v1/states',
            headers: { }
          };

          axios(config)
          .then(function (response) {
            console.log(response.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });

        }


      }, [])


  // ==============================================================
  // Hendel Inputan
  // ==============================================================
  // Hendel Change Inputan
  const handleChangeAll = (e) => {
    if (e.target.id === "EmailChange" && HidePerubahanKK === "show") {
      SetDataEmailBaru(e.target.value);
    }

    if (e.target.id === "NomerWhatsappTerbaru" && HidePerubahanKK === "show") {
      SetNomerWhatsapp(e.target.value);
    }
    // nama jalan

    if (e.target.id === "namaJalan" && HidePerubahanAL === "") {
      SetNamaJalanRumah(e.target.value);

      // console.log(NamaJalanRumah);
    }
    if (e.target.id === "namaJalan2" && HidePerubahanAL === "") {
      SetNamaJalanKecamatan(e.target.value);

      // console.log(NamaJalanKecamatan);
    }
    if (e.target.id === "namaJalan3" && HidePerubahanAL === "") {
      SetNamaJalanKota(e.target.value);

      // console.log(NamaJalanKota);
    }
    if (e.target.id === "namaJalan4" && HidePerubahanAL === "") {
      SetNamaJalanProfinsi(e.target.value);

      // console.log(NamaJalanProfinsi);
    }
    if (e.target.id === "namaJalan5" && HidePerubahanAL === "") {
      SetNamaJalanKodePos(e.target.value);

      // console.log(NamaJalanKodePos);
    }

    if (e.target.id === "Email") {
      SetDataEmail(e.target.value);
    }
    if (e.target.id === "Nomor") {
      SetDataNumber(e.target.value);
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
    SetUploadStatus(true);
  };

  const onDropCostum2 = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.files[0]);
  };

  // Anti Bypas
  const AntiBypass = () => {
    if (localStorage.LoginStatusValid !== "true") {
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
      console.log(LoadDataNegara)
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
  };
  // ==============================================================
  // On Submit
  // ==============================================================

  const HendleSubmit = (e) => {
    if (e.target.id === "ValidationButton") {
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
                <b>12.4430244.1</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Nama Pemegang Polis</p>
              <p className="hasil">
                <b>Jhon Doe</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>No. Handphone</p>
              <p className="hasil">
                <b>+62 - 8123456789</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Email</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Korespondensi</p>
              <p className="hasil">
                <b>
                  Jl. Tampomas Selatan III/26 RT.004 RW.001, Kel. Petompon Kec.
                  Gajah Mungkur
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
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama Lengkap Pemegang Polis"
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
                name="InputNamaPemegangPolis"
                type="number"
                placeholder="Masukkan Nama  Kontak Pemegang Polis"
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
                name="InputNamaPemegangPolis"
                type="number"
                placeholder="Masukkan  Kontak Pemegang Polis"
              ></input>
            </div>
          </div>
          <div
            className={`PerubahanKontakPemegangPolis-Check  ${HidePerubahanKK}`}
          >
            {/*  Kondisi jika no hp sama dengan whatsap   */}
            <input type="checkbox" />{" "}
            <h4>Nomor WhatsApp sama dengan Nomor Handphone</h4>
          </div>
          <div className={`InputWrap ${HidePerubahanKK}`}>
            <p htmlFor="InputNamaPemegangPolis">Email Pemegang Polis</p>
            <div className="inputanWraperIsi ">
              <i className="fas fa-envelope"></i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama Lengkap Pemegang Polis"
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
              <input placeholder="Masukkan Alamat Rumah"></input>
              <input placeholder="Masukkan RT/RW atau Nama Bangunan/Gedung"></input>
              <p>Negara</p>
              <Select options={LoadDataNegara} />
            </div>
            {/* Alamat profinsi*/}
            <div className="AlamatWrapProf">
              <div className="AlamatKanan">
                <p>Provinsi</p>
                <input type="text" placeholder="Masukkan Nama Provinsi"></input>
              </div>
              {/* Alamat kota*/}
              <div className="AlamatKiri">
                <p>Kota</p>
                <input type="text" placeholder="Masukkan Nama Kota"></input>
              </div>
            </div>
            {/* Alamat  kecamatan*/}
            <div className="AlamatWrapProf">
              <div className="AlamatKanan">
                <p>Kecamatan</p>
                <input
                  type="text"
                  placeholder="Masukkan Nama Kecamatan"
                ></input>
              </div>
              {/* Alamat Kelurahan*/}
              <div className="AlamatKiri">
                <p>Kelurahan</p>
                <input
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
                  name="InputNamaPemegangPolis"
                  type="text"
                  placeholder="5-digit Kode Pos"
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
