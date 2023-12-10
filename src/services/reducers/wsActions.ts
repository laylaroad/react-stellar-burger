import { createAction } from '@reduxjs/toolkit';

export const connect = createAction<string>('ORDERS_WS_CONNECT');
export const disconnect = createAction('ORDERS_WS_DISCONNECT');
export const wsConnecting = createAction('ORDERS_WS_CONNECTING');
export const wsOpen = createAction('ORDERS_WS_OPEN');
export const wsClose = createAction('ORDERS_WS_CLOSE');
export const wsMessage = createAction<TResponseGetOrders>('ORDERS_WS_MESSAGE');
export const wsError = createAction<string>('ORDERS_WS_ERROR');

export type TResponseGetOrders = {
    success: boolean | null;
    orders: any[];
    total: number;
    totalToday: number;
};
