import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/auth.reducer';


const preloadedState = {
    name: 'Summit',
    age: '21'
}

const reducer = (preloadedState) => preloadedState;

//As of Redux v6, 'createStore()' has been deprecated in favor of 'configureStore()'.
//Please keep in mind that 'configureStore' uses 'createStore' under the hood, as well
//as 'applyMiddleware', 'composeWithDevTools', enchancers and more.
//Also keep in mind that 'configureStore()' accepts ONLY ONE object as argument.
//This object contains all the store configurations like the reducer function/array, 
//preloadedState, used middlewares, etc.
const store = configureStore({
    reducer: reducer,
    preloadedState
});

export default store;


