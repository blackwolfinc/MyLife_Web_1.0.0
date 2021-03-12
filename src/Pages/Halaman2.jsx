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
            <span>icon</span> <p>Data Nasabah Terakhir</p>
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
        <div className="PerubahanDataCheck">
          <div className="PerubahanDataPemegangPolis-Check">
            <input type="radio" /> <h4>Perubahan Nama Pemegang Polis</h4>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis2 */}
        <div className="PerubahanDataCheck">
          <div className="PerubahanKontakPemegangPolis-Check">
            <input type="radio" /> <h4>Perubahan Kontak Pemegang Polis</h4>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis3ß */}
        <div className="PerubahanDataCheck">
          <div className="PerubahanAlamatPemegangPolis-Check">
            <input type="radio" />{" "}
            <h4>Perubahan Alamat Korespondensi Pemegang Polis</h4>
          </div>
        </div>

        <div className="PerubahanDataCheck">
        <div className="DataDiriTerakhir">
            <span>icon</span> <p>Data Nasabah Terakhir</p>
          </div>

          <div className="UKGroup">
          <div className="UKDragDropFile">drag drop File</div>
            <div className="UKButtonGroup">
              <button>Unggah Ktp</button>
              <p>Tidak ada File Yang di Pilih</p>
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
  );
};
