import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { socketMiddleware } from './middlewares/websocket';

//reducers
import ingredientsReducer from './reducers/ingredientsReducer';
import orderReducer from './reducers/orderReducer';
import burgerConstructorReducer from './reducers/burgerConstructorReducer';
import modalReducer from './reducers/modalReducer';
import userReducer from './reducers/userReducer';
import ordersFeedReducer from './reducers/ordersFeedReducer';
import feedReducer from './reducers/feedReducer';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  burgerConstructor: burgerConstructorReducer,
  modal: modalReducer,
  user: userReducer,
  feed: ordersFeedReducer,
  feedApi: feedReducer,
});

// export type TwsActions = {
//  const connect = createAction<string>('ORDERS_WS_CONNECT');
// const disconnect = createAction('ORDERS_WS_DISCONNECT');
// const wsConnecting = createAction('ORDERS_WS_CONNECTING');
// const wsConnecting = createAction('givemoney');
// const wsOpen = createAction('ORDERS_WS_OPEN');
// const wsClose = createAction('ORDERS_WS_CLOSE');
// const wsMessage = createAction<TResponseGetOrders>('ORDERS_WS_MESSAGE');
// const wsError = createAction<string>('ORDERS_WS_ERROR');
// }

type TResponseGetOrders = {
  success: boolean | null;
  orders: any[];
  total: number;
  totalToday: number;
};


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(socketMiddleware());
  }
})

export type RootStore = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;


