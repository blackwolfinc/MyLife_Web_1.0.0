import { combineReducers } from 'redux';

// PAHSE 4
// KALO GAK KEBACA HARUS DI INIISIALISAI
// Import  Reducer Yang akan di guanakan
import getDataReducer from "./getDataReducer"
import editDataReducers from "./editDataReducers"
import loginDataReducers from  "./loginDataReducers"
//

export default combineReducers({
// inisialisasi Reducer
  getdataAll : getDataReducer , editDataReducers ,loginDataReducers
});