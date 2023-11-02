
import { createSelector } from '@reduxjs/toolkit';

export const selectOrderIsLoading = createSelector(
    [(state) => state.order],
    (order) => order.isLoading
);

export const selectOrderNumber = createSelector(
    [(state) => state.order],
    (order) => order.number
);

export const selectOrderIsError = createSelector(
    [(state) => state.order],
    (order) => order.isError
);

export const selectOrderModal = createSelector(
    [(state) => state.order],
    (order) => order.orderModal
);
