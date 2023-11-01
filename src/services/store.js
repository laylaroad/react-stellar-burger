import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './reducers/ingredientsReducer.js';
import orderReducer from './reducers/orderReducer.js';
import burgerConstructorReducer from './reducers/burgerConstructorReducer.js';



export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        order: orderReducer,
        burgerConstructor: burgerConstructorReducer,
    }
});



