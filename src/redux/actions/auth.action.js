import { signInWithPopup } from 'firebase/auth';
import { firebaseApp, firebaseAuth, provider } from '../../firebase';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';

//import firebase from '../../firebase'
//import auth from '../../firebase';

export const login = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const res = await signInWithPopup(firebaseAuth, provider);
        //console log for debugging purposes, checking if user 
        //data from GoogleAuth is being received and passed to 'res' 
        //console.log(res);

        const accessToken = res.user.accessToken

        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL
        }
        //console log for debugging purposes, checking if user 
        //data from 'res' is being passed to 'profile' 
        //console.log(profile)

        sessionStorage.setItem('ytclone-access-token', accessToken);
        sessionStorage.setItem('ytclone-user', JSON.stringify(profile));
        // profile is an object, so we stringify it for storage.


        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })

    } catch (error) {
        console.error(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

export const log_out = () => async dispatch => {
    await firebaseAuth.signOut()
    dispatch({
        type: LOG_OUT
    })

    sessionStorage.removeItem('ytclone-access-token');
    sessionStorage.removeItem('ytclone-user');
}