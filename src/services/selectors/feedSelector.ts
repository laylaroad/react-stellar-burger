import { RootStore } from '../store';

export const selectAllOrders = (store: RootStore) => store.feedApi.allOrders;
