
// export const selectOrderIsLoading = createSelector(
//     [(state) => state.order],
//     (order) => order.isLoading
// );

export const selectOrderIsLoading = (store) => store.order.isLoading;

// export const selectOrderNumber = createSelector(
//     [(state) => state.order],
//     (order) => order.number
// );

export const selectOrderNumber = (store) => store.order.number;

// export const selectOrderIsError = createSelector(
//     [(state) => state.order],
//     (order) => order.isError
// );

export const selectOrderIsError = (store) => store.order.isError;

// export const selectOrderModal = createSelector(
//     [(state) => state.order],
//     (order) => order.orderModal
// );

export const selectOrderModal = (store) => store.order.orderModal;
