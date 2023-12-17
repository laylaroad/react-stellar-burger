
import { wsActions } from '../actions/actions';

export const wsConnect = (apiPath: string) => ({ type: wsActions.wsConnect, apiPath });

export const wsDisconnect = (apiPath: string) => ({ type: wsActions.wsDisconnect, apiPath });

export const wsDisconnected = (apiPath: string) => ({ type: wsActions.wsDisconnected, apiPath });

export const wsConnected = (apiPath: string) => ({ type: wsActions.wsConnected, apiPath });

export const wsError = (apiPath: string) => ({ type: wsActions.wsError, apiPath });

export const wsClose = (apiPath: string) => ({ type: wsActions.wsClose, apiPath });
