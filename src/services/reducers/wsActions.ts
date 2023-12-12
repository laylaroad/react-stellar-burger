
export const wsConnect = (url: any) => ({ type: 'WS_CONNECT', url });
export const wsDisconnect = (url: any) => ({ type: 'WS_DISCONNECT', url });
export const wsDisconnected = (url: any) => ({ type: 'WS_DISCONNECTED', url });
export const wsConnected = (url: any) => ({ type: 'WS_CONNECTED', url });
export const wsError = (url: any) => ({ type: 'WS_ERROR', url });
export const wsClose = (url: any) => ({ type: 'WS_CLOSE', url });
