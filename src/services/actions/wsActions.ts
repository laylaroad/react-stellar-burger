
import { wsActions } from './actions';

export const wsConnect = (url: string) => ({ type: wsActions.wsConnect, url: url });

export const wsDisconnect = (url: string) => ({ type: wsActions.wsDisconnect, url: url });

export const wsDisconnected = (url: string) => ({ type: wsActions.wsDisconnected, url: url });

export const wsConnected = (url: string) => ({ type: wsActions.wsConnected, url: url });

export const wsError = (url: string) => ({ type: wsActions.wsError, url: url });

export const wsClose = (url: string) => ({ type: wsActions.wsClose, url: url });
