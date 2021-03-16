import { combineReducers } from 'redux';

// Import  Reducer Yang akan di guanakan
import GetDataReducer from './GetDataReducer'
//

export default combineReducers({
// inisialisasi Reducer
  getdataAll : GetDataReducer
});