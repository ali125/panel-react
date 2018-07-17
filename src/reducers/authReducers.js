import { GET_USER } from "../actions/types";

const INITIAL_STATE = {
    loggedIn: false,
    user: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_USER:
            return { user: action.payload };
        default: 
            return state;
    }
}
