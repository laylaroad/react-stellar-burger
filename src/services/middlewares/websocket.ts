// import { IwsActionTypes } from '../../types/websocket-types';
import { Middleware } from 'redux';
import { RootStore } from '../store';

import * as actions from '../../services/reducers/wsActions';


export const socketMiddleware = (): Middleware<{}, RootStore> => {
    let socket: WebSocket | null = null;
    return (store) => (next) => (action) => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = new WebSocket(action.url);

                socket.onopen = (event: any) => {
                    console.log('websocket open', event.target.url);
                    store.dispatch(actions.wsConnected(event.target.url));
                };
                break;

            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                console.log('websocket closed');
                break;
            default:
                return next(action);
        };
    };
};