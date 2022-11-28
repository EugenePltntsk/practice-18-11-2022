import { combineReducers } from 'redux';
import productsReducer from "./productsSlice"
import modalActiveReducer from "./modalActiveSlice"

export const rootReducer = combineReducers({ 
    products: productsReducer,
    modalActive: modalActiveReducer,
});


