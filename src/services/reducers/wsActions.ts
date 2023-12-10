import { createAction } from '@reduxjs/toolkit';

const url = 'wss://norma.nomoreparties.space/orders';

export const wsConnect = (url: any) => ({ type: 'WS_CONNECT', url });
export const wsDisconnect = (url: any) => ({ type: 'WS_DISCONNECT', url });
export const wsConnected = (url: any) => ({ type: 'WS_CONNECTED', url });
