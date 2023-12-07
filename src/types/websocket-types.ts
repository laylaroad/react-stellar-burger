import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface TwsActionTypes {
    wsConnect: ActionCreatorWithPayload<string>,
    wsDisconnect: ActionCreatorWithoutPayload,
    wsSendMessage?: ActionCreatorWithPayload<any>,
    wsConnecting: ActionCreatorWithoutPayload,
    onOpen: ActionCreatorWithoutPayload,
    onClose: ActionCreatorWithoutPayload,
    onError: ActionCreatorWithPayload<string>,
    onMessage: ActionCreatorWithPayload<any>,
}
