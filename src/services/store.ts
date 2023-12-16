import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { socketMiddleware } from './middlewares/websocket';

//reducers
import ingredientsReducer from './reducers/ingredientsReducer';
import orderReducer from './reducers/orderReducer';
import burgerConstructorReducer from './reducers/burgerConstructorReducer';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';
import feedReducer from './reducers/feedReducer';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: burgerConstructorReducer,
  modal: modalReducer,
  user: userReducer,
  feedApi: feedReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(socketMiddleware());
  }
})

export type RootStore = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;


