import { signInWithPopup } from 'firebase/auth';
import { firebaseApp, firebaseAuth, provider } from '../../firebase';
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

//import firebase from '../../firebase'
//import auth from '../../firebase';

export const login = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const res = await signInWithPopup(firebaseAuth, provider);
        console.log(res);

        const accessToken = res.user.accessToken

        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL
        }
        console.log(profile)

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

