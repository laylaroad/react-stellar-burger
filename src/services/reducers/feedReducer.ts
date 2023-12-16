import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrders } from '../../types/order-types';
interface feedApiState {
    allOrders: IOrders | null,
}

export const initialState: feedApiState = {
    allOrders: null,
}

const feedSlice = createSlice({
    name: 'feedApi',
    initialState,
    reducers: {
        setAllOrders: (state, action: PayloadAction<any>) => {
            state.allOrders = action.payload;
        },
    },
});

export const { setAllOrders } = feedSlice.actions;

export default feedSlice.reducer;
