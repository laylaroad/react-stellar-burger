
export const wsConnect = (url: string) => ({ type: 'WS_CONNECT', url });
export const wsDisconnect = (url: string) => ({ type: 'WS_DISCONNECT', url });
export const wsDisconnected = (url: string) => ({ type: 'WS_DISCONNECTED', url });
export const wsConnected = (url: string) => ({ type: 'WS_CONNECTED', url });
export const wsError = (url: string) => ({ type: 'WS_ERROR', url });
export const wsClose = (url: string) => ({ type: 'WS_CLOSE', url });
