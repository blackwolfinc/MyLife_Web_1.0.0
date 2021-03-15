import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets//Css/pages/Pages2.scss";
import Select from 'react-select';
import { UploadFileDrop } from "./Components/UploadFileDrop";
import { MiniCrausel } from "./Components/MiniCrausel";
import logoKecil1 from "../Assets/Img/Icon/ico-user-12-x-12.png"



export const Halaman2 = () => {

  const options = [
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Amerika', label: 'Amerika' },
    { value: 'Engris', label: 'Engris' }
  ]
  

  return (
    <div className="ContainerDefaultSec">
      <div className="ContainerKiri">
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        <div className="ContainerCrausel">
    <MiniCrausel/>

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
            <span> <i class="fas fa-user"></i></span> <p>Data Nasabah Terakhir</p>
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
          <div className="InputWrap">
            <p for="InputNamaPemegangPolis">Nama Lengkap Pemegang Polis</p>

            <div className="inputanWraperIsi">
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
        <div className="PerubahanDataCheck">
          <div className="PerubahanKontakPemegangPolis-Check">
            <input type="radio" /> <h4>Perubahan Kontak Pemegang Polis</h4>
          </div>
          <div className="InputWrap">
            <p for="InputNamaPemegangPolis">Nomor Handphone Pemegang Polis</p>

            <div className="inputanWraperIsi">
            <i class="fas fa-phone-alt"></i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama Lengkap Pemegang Polis"
              ></input>
            </div>
          </div>
          <div className="InputWrap">
            <p for="InputNamaPemegangPolis">Nomor WhatsApp Pemegang Polis</p>

            <div className="inputanWraperIsi">
            <i class="fas fa-phone-alt"></i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama Lengkap Pemegang Polis"
              ></input>
            </div>
          </div>
          <div className="PerubahanKontakPemegangPolis-Check">
            <input type="radio" />{" "}
            <h4>Nomor WhatsApp sama dengan Nomor Handphone</h4>
          </div>
          <div className="InputWrap">
            <p for="InputNamaPemegangPolis">Email Pemegang Polis</p>

            <div className="inputanWraperIsi">
            <i class="fas fa-envelope"></i>
              <input
                name="InputNamaPemegangPolis"
                type="text"
                placeholder="Masukkan Nama Lengkap Pemegang Polis"
              ></input>
            </div>
          </div>
        </div>
        {/* Perubahan Data Pemegang Polis3ß */}
        <div className="PerubahanDataCheck">
          <div className="PerubahanAlamatPemegangPolis-Check">
            <input type="radio" />{" "}
            <h4>Perubahan Alamat Korespondensi Pemegang Polis</h4>
          </div>
          <div className="AlamatWraper">
            <p>Alamat Korespondensi Pemegang Polis</p>
            <input placeholder="Masukkan Alamat Rumah"></input>
            <input placeholder ="Masukkan RT/RW atau Nama Bangunan/Gedung"></input>
            <p>Negara</p>
            <Select options={options} />
          </div>
            <div className ="AlamatWrapProf">
            <div className="AlamatKanan">
              <p>Provinsi</p>
              <input type="text" placeholder="Masukkan Nama Provinsi"></input>
            </div>
            <div className="AlamatKiri">
            <p>Kota</p>
              <input type="text" placeholder="Masukkan Nama Kota"></input> 
            </div>

            </div>
            <div className ="AlamatWrapProf">
            <div className="AlamatKanan">
              <p>Kecamatan</p>
              <input type="text" placeholder="Masukkan Nama Kecamatan"></input>
            </div>
            <div className="AlamatKiri">
            <p>Kelurahan</p>
              <input type="text" placeholder="Masukkan Nama Kelurahan"></input> 
            </div>

            </div>

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

        <div className="PerubahanDataCheck">
          <div className="DataDiriTerakhir">
            <span><i class="fas fa-id-card"></i></span> <p>Data Nasabah Terakhir</p>
          </div>
       
          <div className="UKGroup">
            <div className="UKDragDropFile"><UploadFileDrop/></div>
            <div className="UKButtonGroup">
              <button>Unggah Ktp</button>
              <p>Tidak ada File Yang di Pilih</p>
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
  );
};
