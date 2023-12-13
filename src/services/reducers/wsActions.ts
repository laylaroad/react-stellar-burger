
export const wsConnect = (apiPath: string) => ({ type: 'WS_CONNECT', apiPath });
export const wsDisconnect = (apiPath: string) => ({ type: 'WS_DISCONNECT', apiPath });
export const wsDisconnected = (apiPath: string) => ({ type: 'WS_DISCONNECTED', apiPath });
export const wsConnected = (apiPath: string) => ({ type: 'WS_CONNECTED', apiPath });
export const wsError = (apiPath: string) => ({ type: 'WS_ERROR', apiPath });
export const wsClose = (apiPath: string) => ({ type: 'WS_CLOSE', apiPath });
