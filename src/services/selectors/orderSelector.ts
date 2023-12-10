import { RootStore } from '../store';
export const selectOrderIsLoading = (store: RootStore) => store.order.isLoading;

export const selectOrderNumber = (store: RootStore) => store.order.number;

export const selectOrderIsError = (store: RootStore) => store.order.isError;

export const selectOrderSuccess = (store: RootStore) => store.order.isSuccess;

// export const selectOrders = (store: RootStore) => store.order.orders;
