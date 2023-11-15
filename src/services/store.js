import { configureStore } from '@reduxjs/toolkit';

//reducers
import ingredientsReducer from './reducers/ingredientsReducer.js';
import orderReducer from './reducers/orderReducer.js';
import burgerConstructorReducer from './reducers/burgerConstructorReducer.js';
import modalReducer from './reducers/modalReducer.js';
import userReducer from './reducers/userReducer.js';


export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        order: orderReducer,
        burgerConstructor: burgerConstructorReducer,
        modal: modalReducer,
        user: userReducer,
    }
});



