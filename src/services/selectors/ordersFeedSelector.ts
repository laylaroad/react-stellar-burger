import { RootStore } from '../store';

export const selectSucces = (state: RootStore) => state.feed.success;

export const selectOrders = (state: RootStore) => state.feed.orders;

export const selectCurrentOrder = (state: RootStore) => state.feed.currentOrder;
