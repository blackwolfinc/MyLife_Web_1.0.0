import React, { forwardRef } from "react";
import "../Assets/Css/LandingPage.scss";
import Logo from "../Assets/Img/Logo.jpg";
import  { useState, useEffect } from'react';
import { loadReCaptcha ,ReCaptcha } from 'react-recaptcha-google'
function Page1() {
const [Hide, SetHideAlternative] = useState("hide")
const [HideCheck, SetAlternativeCheck] = useState(false)
const [Change, SetChange] = useState("")
const [ChangeWa, SetChangeWa] = useState("hide")

// data
const [DataPolis, SetDataPolis] = useState("")
const [DataNama, SetDataNama] = useState("")
const [DataNumber, SetDataNumber] = useState(0)
const [DataEmail, SetDataEmail] = useState("")



const TidakAdaEmailAction =()=> {
    if (Hide==="hide"&&HideCheck==="true") {

        SetHideAlternative("")
        SetAlternativeCheck("false")
    }
    else{
        SetHideAlternative("hide")
        SetAlternativeCheck("true")
    }

}

const handleChange =(e)=>{
    SetChange(e.target.value)
    alert(e.target.value)
}
const handleChangeAll =(e)=>{
    if (e.target.id =="Email") {
        SetDataEmail( e.target.value);
    }
    if ( e.target.id=="Nomor") {
        SetDataNumber( e.target.value);
    }
    if (e.target.id =="noPolis") {
        SetDataPolis( e.target.value);
    }
    if (e.target.id =="Name")
    {
        SetDataNama( e.target.value);

    }



}

const handleChangeWa =(e)=>{
    SetChangeWa(e.target.value)
}

    useEffect(() => {
        loadReCaptcha();
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
            <input onChange={handleChangeAll} type="text" id="noPolis" required/>
          </div>
          {/* Nama Lengkap */}
          <div className="col nameWrap">
            <label htmlFor="Name">
              Nama Lengkap <span>*</span>
            </label>
            <input onChange={handleChangeAll} type="text" id="Name" required />
          </div>
          {/* Nomor Ponsel */}
          <div className="col nomorWrap">
            <label  htmlFor="Nomor">
              Nomor Ponsel / HP <span>*</span>
            </label>
            <input onChange={handleChangeAll}   type="number" id="Nomor" required />

          </div>

          {/* Alamat Email */}
          <div className="col emailWrap">
            <label htmlFor="Email">
             Alamat E-mail<span>*</span>
            </label>
            <input placeholder={"email sekarang = " } onChange={handleChangeAll} type="email" id="Email" required />

          </div>

          {/* Select  Perubahan Data*/}





          {/*Terhubung Wa  */}
          <div className="col selectlWrap">
            <label htmlFor="Email">
              Apakah no Hp anda Terhubung dengan No Whatsapp <span>*</span>
            </label>
            <select
             onChange={handleChangeWa} >
              <option value="hide"></option>
              <option selected id="option1" value="hide">
                ya
              </option>
              <option  id="option2" value="show">
                Tidak
              </option>
              
            </select>
          </div>
            {/* no Wa baru  */}
            <div className={`col nomorWrap2 ${ChangeWa}`}>
            <label htmlFor="Nomor">
             Nomor Whatsapp  <span>*</span>
            </label>
            <input type="number" id="Nomor"  />
          </div>
          {/* Checkbox */}
          {/* Checkbook Triger */}
          <div className="col checkboxlWrap ">
            <label>
              <input
                name="isGoing"
                type="checkbox"
                checked={(Hide==="hide")?false:true}
                onChange={TidakAdaEmailAction}
              />
              <p>Tidak Ada Alamat Email</p>
            </label>
            {/* Checkboox From */}

            <div className= {`col checkbookFrom ${Hide}`}>
            <label htmlFor="checkbookFrom ">
              Alamat Korespondensi <span> *</span>
            </label>
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

            <ReCaptcha

            ref={(el) => {"tes"}}
            size="normal"
            data-theme="dark"
            render="explicit"
            sitekey="6LeB9VwaAAAAAMRZDD8GPlr1-Wn9WPcJaRTGnXp-"
            // onloadCallback={this.onLoadRecaptcha}
            // verifyCallback={this.verifyCallback}
        />
          </div>


            <button className="btn-Submit" type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Page1;
