// // import { IwsActionTypes } from '../../types/websocket-types';
// import { Middleware } from 'redux';
// import { RootStore } from '../store';

import { nextTick } from "process";

// export const socketMiddleware = (): Middleware<{}, RootStore> => {

//     return (store) => {
//         let socket: WebSocket | null = null;
//         let isConnected = false;

//         return (next) => (action) => {
//             const { dispatch } = store;
//             const {
//                 wsConnect,
//                 wsOpen,
//                 wsClose,
//                 wsError,
//                 wsMessage,
//                 wsConnecting,
//             } = wsActions;

//             if (wsConnect.match(action)) {
//                 // console.log('connect');
//                 // socket = new WebSocket('wss://norma.nomoreparties.space');
//                 isConnected = true;
//                 dispatch(wsConnecting());
//             }

//             if (socket) {
//                 socket.onopen = () => {
//                     console.log('socket is opened');
//                     dispatch({ type: wsOpen });
//                 };

//                 socket.onerror = (err) => {
//                     dispatch({ type: wsError });
//                 };

//                 socket.onmessage = (event) => {
//                     const { data } = event;
//                     const parsedData = JSON.parse(data);
//                     console.log('Received message:', parsedData);
//                     dispatch({ type: wsMessage, payload: parsedData });
//                 };

//                 socket.onclose = (event) => {
//                     dispatch({ type: wsClose, payload: event.code.toString() });
//                 };
//             }

//             next(action);
//         };
//     };
// };

export default () => null;
