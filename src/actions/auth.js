import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config"
import { startLoading, finishLoading } from "./ui";
import Swal from 'sweetalert2'
import { noteLogout } from "./notes";

export const startLoginEmailPassword = ( email, password ) => {
    
    return (dispatch) => {
        dispatch(
            startLoading()
        )
        firebase.auth().signInWithEmailAndPassword( email, password)
            .then( ({ user })  => {
                dispatch(
                    finishLoading()
                )
                dispatch(
                    login( user.id, user.displayName)
                )
            })
            .catch( e => {
                
                dispatch(
                    finishLoading()
                );
                Swal.fire('Fail', e.message, 'error')

            })
    }

}


export const startRegisterWithEmailAndPasswordName = (email, password, name) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password)
            .then( async({ user })  => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login( user.id, user.displayName)
                )
            })
            .catch( e => {
                Swal.fire('Fail', e.message, 'error')
            })
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                console.log({user})
                dispatch(
                    login( user.id, user.displayName)
                )
            })
            .catch( e => {
                console.log(e)
            })

    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
         
        dispatch(logout())
        dispatch(noteLogout())
    }
}

export const logout = () => ({
    type: types.logout
})