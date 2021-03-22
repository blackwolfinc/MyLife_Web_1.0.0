import {
EDIT_POLIS, NO_POLIS
  } from "../Action/actionTypes";

  const initialState = {
    // token : "",
    data : [] ,
    no_polis: "",
    // InputNamaPemegangPolis : "",
    // InputNomorHandponePemegangPolis : "" ,
    // EmailChange : "",
    // UploadFileInput : "",
    // namaJalanAddres1: "",
    // namaJalanAddres2: "",
    // namaJalanKota: "",
    // namaJalanKecamatan: "",
    // namaJalanKelurahan:"",
    // namaJalanKodePos: "",


  };


  export const getDataReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
      case EDIT_POLIS:
        return {
          ...state,
          loading: true,
          data : action.payload,
          // InputNamaPemegangPolis :action.data1,
          // InputNomorHandponePemegangPolis :action.payload,
          // EmailChange :action.payload,
          // UploadFileInput :action.payload,
          // namaJalanAddres1 :action.payload,
          // namaJalanAddres2 :action.payload,
          // namaJalanKota :action.payload,
          // namaJalanKecamatan :action.payload,
          // namaJalanKelurahan :action.payload,
          // namaJalanKodePos :action.payload,
        };
        case NO_POLIS:
          return {
            ...state,
            loading: true,
            no_polis : action.payload
          };


      default:
        return {
          ...state,
        };
        break;
    }
  };

  export default getDataReducer;
