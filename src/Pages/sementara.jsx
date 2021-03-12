import React from 'react'

export const sementara = () => {
    return (
        <div>
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
        </div>
    )
}
