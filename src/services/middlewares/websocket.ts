import { Middleware } from 'redux';
import { RootStore } from '../store';

import * as actions from '../websocket/wsActions';
import { wsActions } from '../actions/actions';
import { setAllOrders } from '../../services/reducers/feedReducer';
import { wsApiHost } from '../../utils/api';

export const socketMiddleware = (): Middleware<{}, RootStore> => {

    let socket: WebSocket | null = null;

    return (store) => (next) => (action) => {
        const { dispatch } = store;

        switch (action.type) {
            case wsActions.wsConnect:
                if (socket !== null) {
                    socket.close();
                }
                const accessToken = localStorage.getItem("accessToken")?.split("Bearer ")[1];
                const url = `${wsApiHost}${action.apiPath}?token=${accessToken}`
                socket = new WebSocket(url);

                socket.onopen = (event: any) => {
                    console.log('websocket open', event.target.url);
                    store.dispatch(actions.wsConnected(event.target.url));
                };

                socket.onerror = (err) => {
                    console.log('error')
                };

                socket.onmessage = (event) => {
                    const payload = JSON.parse(event.data);
                    if (payload.success) {
                        store.dispatch(setAllOrders(payload));
                    } else {
                        console.log('error');
                    }
                };

                socket.onclose = event => {
                    if (event.code !== 1000) {
                        dispatch(actions.wsClose(event.code.toString()));
                    }
                };

                break;

            case wsActions.wsDisconnect:
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
