import { Middleware } from 'redux';
import { RootStore } from '../store';

import * as actions from '../../services/reducers/wsActions';
import { setAllOrders } from '../../services/reducers/feedReducer';

export const socketMiddleware = (): Middleware<{}, RootStore> => {

    let socket: WebSocket | null = null;

    return (store) => (next) => (action) => {
        const { dispatch } = store;

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

                socket.onerror = () => {
                    console.log('error')
                };

                socket.onmessage = (event) => {
                    const payload = JSON.parse(event.data);
                    console.log(payload, 'получаем ответ от сервера');
                    store.dispatch(setAllOrders(payload));
                };

                socket.onclose = event => {
                    if (event.code !== 1000) {
                        dispatch(actions.wsError(event.code.toString()));
                    }
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
        }
    };
};
