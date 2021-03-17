import {
GET_DATA_POLIS,
GET_DATA_TOKEN,
GET_DATA_AWAL,
GET_DATA_SUCSSES,
GET_DATA_FAIL


} from "../Action/actionTypes"

const initialState = {
    // token : "",
    userPolis : [],
    loading : false ,
    error : false ,
    token : [] , 
    errorMessage : ""

};


export const getDataReducer = (state = initialState , action) => {
 
    const {type} = action 
    switch (type) {
        case GET_DATA_AWAL:
          return{
            ...state,loading : true  

          }  
        
          case GET_DATA_SUCSSES:
            return{
              ...state,
              loading : false  ,
            //   token : action.data.token ,
              token : action.payload.data.token
                
            }  

            case GET_DATA_FAIL:
                return{
                  ...state,
                  loading : false  ,
                  token : "" ,
                  data : [] ,
                  error : true, 
                 errorMessage : action.data

                }  
    
        default:
            return{
                ...state 
            }
            break;
    }


}



export default getDataReducer;