import { signInWithPopup } from 'firebase/auth';
import { firebaseApp, firebaseAuth, provider } from '../../firebase';

//import firebase from '../../firebase'
//import auth from '../../firebase';

export const login = () => async dispatch => {
    try {

        
        const res = await signInWithPopup(firebaseAuth, provider);
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

