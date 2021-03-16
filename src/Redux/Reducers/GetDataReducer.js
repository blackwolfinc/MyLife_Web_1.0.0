import {
GET_DATA_POLIS,
GET_DATA_TOKEN

} from "../Action/actionTypes"

const initialState = {
    token : "weqweqweqweqwwe",
    userPolis : []



};

const GetDataReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_DATA_TOKEN:
            return{...state, token : action.token}

        case GET_DATA_POLIS:
        return{...state, userPolis : action.userPolis}


        default:
        return state;
            break;
    }


}

export default GetDataReducer;