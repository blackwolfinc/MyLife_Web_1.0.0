import { combineReducers } from 'redux';

// Import  Reducer Yang akan di guanakan
import getDataReducer from "./getDataReducer"
//

export default combineReducers({
// inisialisasi Reducer
  getdataAll : getDataReducer
});