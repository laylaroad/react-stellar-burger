import { configureStore } from '@reduxjs/toolkit';

//reducers
import ingredientsReducer from './reducers/ingredientsReducer';
import orderReducer from './reducers/orderReducer';
import burgerConstructorReducer from './reducers/burgerConstructorReducer';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';


export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    burgerConstructor: burgerConstructorReducer,
    modal: modalReducer,
    user: userReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


