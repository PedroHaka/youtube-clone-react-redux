import firebase from '../../firebase'
import auth from '../../firebase.js';

const login = () => async dispatch => {
    try {

        const provider = new firebase.auth.GoogleAuthProvider();

        const res = await auth.signInWithPopup(provider)
        console.log(res)

    } catch (error) {

    }
}

export default login;