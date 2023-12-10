import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { number } from "prop-types";
import { IOrder } from '../../types/order-types';

interface IOrdersFeedProps {
    success: boolean | null;
    orders: Array<Omit<IOrder, 'owner'>>;
    total: number;
    totalToday: number;
    currentOrder: IOrder | null;
}

const initialState: IOrdersFeedProps = {
    success: null,
    total: 0,
    totalToday: 0,
    orders: [],
    currentOrder: null,
}

const orderSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setSuccess: (state, action) => {
            state.success = true;

        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setTotalToday: (state, action) => {
            state.totalToday = action.payload;
        },
        setCurrentOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
    },
});

export const {
    setSuccess,
    setTotal,
    setTotalToday,
    setCurrentOrder,
    setOrders
} = orderSlice.actions;


export default orderSlice.reducer;
