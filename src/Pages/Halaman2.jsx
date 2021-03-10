import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets//Css/pages/Pages2.scss";
export const Halaman2 = () => {
  return (
    <div className="ContainerDefaultSec">
      <div className="ContainerKiri">
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        <div className="ContainerCrausel"></div>
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
            <span>icon</span> <p>Data Diri Terakhir</p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>No. Polis</p>
              <p className="hasil"><b>12.4430244.1</b></p>
            </div>
            <hr />
            <div className="showData">
              <p>Nama Pemegang Polis</p>
              <p className="hasil"><b>Jhon Doe</b></p>
            </div>
            <hr />
            <div className="showData">
              <p>No. Handphone</p>
              <p className="hasil"><b>+62 - 8123456789</b></p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Email</p>
              <p className="hasil"><b>sample@example.com</b></p>
            </div>
            <hr />
            <div className="showData">
              <p>Alamat Korespondensi</p>
              <p className="hasil"><b>Jl. Tampomas Selatan III/26 RT.004 RW.001, Kel. Petompon Kec. Gajah Mungkur</b></p>
            </div>
          </div>
        </div>
      {/* Perubahan Data Pemegang Polis */}
      <div className="PerubahanDataPemegangPolis">
        <div className="PerubahanDataPemegangPolis-Check">
        <input type="radio" /> <h4>Perubahan Nama Pemegang Polis</h4>
        </div>

      </div>




        {/* Pembaruan Data Diri */}
        <div className="PembaruhanDataDiri">
          <div className="PBDTitle">
            <h3>Pembaruan Data Diri</h3>
            <p>Harap Untuk Merubah Data Yang Perlu saja</p>
          </div>


        <div className="PBDIsi">
          <div className="PBDisiContainer">
            <p>Nama Pemegang Polis</p>
            <input type="text" />
          </div>
          <div className="PBDisiContainer">
            <p>Nama Pemegang Polis</p>
            <input type="text" />
          </div>{" "}
          <div className="PBDisiContainer">
            <p>Nama Pemegang Polis</p>
            <input type="text" />
          </div>
          <div className="WaCheck">
            <input type="radio" />
            <p>No. WhatsApp sama Dengan No.Handphone</p>
          </div>
          </div>
          {/* Korespondensi */}
          <div className="KorespondensiContainer">
            <div className="KRTitle">
              <h3>Korespondensi</h3>
              <p>Pilih Minimal 1 pilihan dibawah</p>
            </div>
            <div className="KRButtonGrup">
              <button>Email</button>
              <button>Alamat</button>
            </div>
            <div className="KRisiHiden">
              {/* hiden Email */}
              <div className="KREmailHiden">
                <h3>Alamat Email</h3>
                <div className="KREmailHiden-input">
                  <h4>E-mail</h4>
                  <input type="email" name="" id="" />
                </div>
              </div>

              {/* hiden alamat Korespondensi */}
              <div className="KRAlamatHiden">
                <h3>Alamat Korespondensi</h3>
                <div className="KRAlamatHiden-input">
                  <h4>alamat</h4>
                  <div className="KRAlamatHiden-inputGroup">
                  <input type="text" />
                  <input type="text" />
                  </div>

                </div>
                <div className="KRAlamatHiden-input">
                  <h4>Negara</h4>
                  <input type="select" />

                </div>

                <div className="KRAlamatHiden-input">
                  <h4>Provinsi</h4>
                  <input type="text" />
                </div>

                <div className="KRAlamatHiden-input">
                  <h4>Kota</h4>
                  <input type="text" />
                </div>

                <div className="KRAlamatHiden-input">
                  <h4>Kecamatan / Kelurahan</h4>
                  <input type="text" />
                </div>

                <div className="KRAlamatHiden-input">
                  <h4>Kode pos</h4>
                  <input type="text" />
                </div>
              </div>
              {/* Unggah Ktp  */}
              <div className="UnggahKtpContainer">
                <div className="UKTitle">
                  <h3>Unggah KTP</h3>
                  <p>Silakan Unggah KTP anda (Maks. 4MB)</p>
                </div>
                <div className="UKGroup">
                  <div className="UKButtonGroup">
                    <button>Unggah Ktp</button>
                    <p>Tidak ada File Yang di Pilih</p>
                  </div>
                  <div className="UKDragDropFile">drag drop File</div>
                </div>
              </div>
            </div>


          </div>
           {/* btn Lanjut Dan back  */}

           <div className="ButtonGroupNav">
          <button>Kembali</button>
          <button>Lanjutkan</button>

           </div>
        </div>
      </div>
    </div>
  );
};
