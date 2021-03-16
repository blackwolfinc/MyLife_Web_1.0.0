import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import Select from "react-select";
import { UploadFileDrop } from "./Components/UploadFileDrop";
import { MiniCrausel } from "./Components/MiniCrausel";
import { useState, useEffect } from "react";
import logoKecil1 from "../Assets/Img/Icon/ico-user-12-x-12.png";
import "../Assets//Css/pages/Pages2.scss";



export const Halaman2 = () => {
  //Upload File 
  const [FileUpload, SetFileUpload] = useState();
  const [UploadStatus, SetUploadStatus] = useState(false);
  const [UrlFile, SetUrlFile] = useState(false);
  // hide anda pop up parameter
  const [HidePerubahanPP, setHidePerubahanPP] = useState("hide");
  const [HidePerubahanKK, setHidePerubahanKK] = useState("hide");
  const [HidePerubahanAL, setHidePerubahanAL] = useState("hide");

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

  // Hendel Hide And popup
  const ChaneAllTrans = (e) => {
    if (e.target.id === "PemegangPolis" && HidePerubahanPP === "show") {
      setHidePerubahanPP("hide");
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

  // Value Select 2
  const options = [
    { value: "Indonesia", label: "Indonesia" },
    { value: "Amerika", label: "Amerika" },
    { value: "Engris", label: "Engris" },
  ];

  return (
    <div className="ContainerDefaultSec">
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
              <i class="fas fa-user"></i>
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
            <p for="InputNamaPemegangPolis">Nama Lengkap Pemegang Polis</p>

            <div className="inputanWraperIsi nameKhusus">
              <i class="fas fa-user"></i>
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
            <p for="InputNamaPemegangPolis">Nomor Handphone Pemegang Polis</p>
            <div className="inputanWraperIsi">
              <i class="fas fa-phone-alt">
                <p>+62</p>
              </i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama  Kontak Pemegang Polis"
              ></input>
            </div>
          </div>
          {/* Inputan Nomor wa   */}
          <div className={`InputWrap ${HidePerubahanKK}`}>
            <p for="InputNamaPemegangPolis">Nomor WhatsApp Pemegang Polis</p>
            <div className="inputanWraperIsi">
              <i class="fas fa-phone-alt">
                {" "}
                <p>+62</p>
              </i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
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
            <p for="InputNamaPemegangPolis">Email Pemegang Polis</p>
            <div className="inputanWraperIsi ">
              <i class="fas fa-envelope"></i>
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
            <div className={`AlamatWraper `}>
              <p>Alamat Korespondensi Pemegang Polis</p>
              <input placeholder="Masukkan Alamat Rumah"></input>
              <input placeholder="Masukkan RT/RW atau Nama Bangunan/Gedung"></input>
              <p>Negara</p>
              <Select options={options} />
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
              <p for="InputNamaPemegangPolis">Kode Pos</p>
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
              <i class="fas fa-id-card"></i>
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
            <UploadFileDrop />
          
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
                <span class="btn-Unggah">Unggah KTP</span>
                <p>Tidak ada file yang dIpilih</p>
              </label>
            </div>
          </div>
        </div>

        {/* btn Lanjut Dan back  */}
        <div className="ButtonGroupNav">
          <button className="button2">
            {" "}
            <i class="far fa-arrow-alt-circle-left"></i> Kembali{" "}
          </button>
          <button className="button1">
            Lanjutkan <i class="far fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
