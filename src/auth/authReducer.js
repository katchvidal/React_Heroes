import { types } from "../types/types";

const state = {
    name : 'usuario',
    logged : false
}

export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                ...action.payload,
                logged : true 
            }
        case types.logout:
            return {
                logged : false
            }
        default:
            return state ;
    }

}
