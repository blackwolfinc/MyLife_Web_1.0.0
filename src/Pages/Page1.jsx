import React, { forwardRef } from "react";
import "../Assets/Css/LandingPage.scss";
import Logo from "../Assets/Img/Logo.jpg";
import React, { useState, useEffect } from
function Page1() {


    useEffect(() => {
       
    }, [])






  return (
    <div>
      {/* header Page Start */}
      <div className="HeaderPage">
        <img className="LogoEquity" src={Logo} alt="" />
        <h2 className="HeaderTitle">
          <b>From Pengkinian Data</b>
        </h2>
      </div>
      {/* Header Page End */}
      <div className="FromIsi">
        <form>
          {/* nomer Polis */}
          <div className="col nomerPolisWrap">
            <label htmlFor="noPolis">
              Nomor Polis <span>*</span>
            </label>
            <input type="text" id="noPolis" required/>
          </div>
          {/* Nama Lengkap */}
          <div className="col nameWrap">
            <label htmlFor="Name">
              Nama Lengkap <span>*</span>
            </label>
            <input type="text" id="Name" required />
          </div>
          {/* Nomor Ponsel */}
          <div className="col nomorWrap">
            <label htmlFor="Nomor">
              Nomor Ponsel / HP <span>*</span>
            </label>
            <input type="number" id="Nomor" required />
          </div>
          {/* Alamat Email */}
          <div className="col emailWrap">
            <label htmlFor="Email">
             Alamat E-mail<span>*</span>
            </label>
            <input type="email" id="Email" required />
          </div>
          {/* Select  Perubahan Data*/}
          <div className="col SelectlWrap">
            <label htmlFor="Email">
              Apakah Data diatas ada perubahan ? <span>*</span>
            </label>
            <select>
              <option value=""></option>
              <option id="option1" value="1">
                ya
              </option>
              <option id="option2" value="2">
                Tidak
              </option>
            </select>
          </div>
          {/*Terhubung Wa  */}
          <div className="col selectlWrap">
            <label htmlFor="Email">
              Apakah no Hp anda Terhubung dengan No Whatsapp <span>*</span>
            </label>
            <select>
              <option value=""></option>
              <option id="option1" value="1">
                ya
              </option>
              <option id="option2" value="2">
                Tidak
              </option>
            </select>
          </div>

          {/* Checkbox */}
          {/* Checkbook Triger */}
          <div className="col checkboxlWrap">
            <label>
              <input
                name="isGoing"
                type="checkbox"
                // checked={this.state.isGoing}
                // onChange={this.handleInputChange}
              />
              <p>Tidak Ada Alamat Email</p>
            </label>
            {/* Checkboox From */}
            <label htmlFor="checkbookFrom">
              Alamat Korespondensi <span> *</span>
            </label>
            <div className="col checkbookFrom">
              {/* nama jaalan dan rumah  */}
              <input type="text" id="namaJalan" />
              <label htmlFor="namaJalan"> Nama Jalan,No Rumah/Umit</label>
              {/* kecamatan */}
              <input type="text" id="namaJalan2" />
              <label htmlFor="namaJalan2"> Kecamatan</label>
              {/* kecamatan */}
              <div className="KotaProf">
                <div className="kota">
                  <input type="text" id="namaJalan2" />
                  <label htmlFor="namaJalan2"> Kota</label>
                </div>
                <div className="prof">
                  <input type="text" id="namaJalan2" />
                  <label htmlFor="namaJalan2"> provinsi</label>
                </div>
              </div>
              {/* kode Pos */}
              <input className="kodePos" type="text" id="namaJalan2" />
              <label htmlFor="namaJalan2"> Kode Pos</label>
            </div>
          </div>
          {/* checkbook end  */}
          {/* persetujuan */}
            <div className="Persetujuan">
            <h4><b>Persetujuan ,</b></h4>
            <br/>
            <br/>
            <p>Saya Menyatakan bahwa informasi yang tertera dalam formulir ini adalah benar dan</p>
            <p>saya setuju untuk  menyesuaikan data Polis saya sesuai dengan informasi yang</p>
            <p>tercantum dalam formulir ini.</p>
            <br/>
            <p>Apabila data yang saya berikan tidak benar mmaka saya bertanggung jawab penuh atas  </p>
            <p>kesalahan tersebut.</p>


            <div className="checkboxlWrap">

            <label>
                <input
                    name="isGoing"
                    type="checkbox"
                    // checked={this.state.isGoing}
                    // onChange={this.handleInputChange}
                />
                <p>Saya Menyetujui <span>*</span></p>
                </label>

                </div>

            </div>
        {/* verivikasi Chapta */}
        <div className="col nomorWrap">
            <label htmlFor="Nomor">
           Mohon verivikasi Diri anda <span>*</span>
            </label>

          </div>


            <button className="btn-Submit" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Page1;
