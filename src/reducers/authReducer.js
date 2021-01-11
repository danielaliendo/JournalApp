import { types } from "../types/types";

/*
{
    uid: jkfnsjkdfnlsdfnk,
    name: 'Daniela'
}
*/
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                id: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {}
        default:
            return state;
    }

}
