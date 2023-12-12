import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrders } from '../../types/order-types';
interface feedApiState {
    allOrders: IOrders | null,
    wsConnection: boolean,
}

const initialState: feedApiState = {
    allOrders: null,
    wsConnection: true,
}

const feedSlice = createSlice({
    name: 'feedApi',
    initialState,
    reducers: {
        setAllOrders: (state, action: PayloadAction<any>) => {
            state.allOrders = action.payload;
        },
        setWsConnection: (state) => {
            state.wsConnection = false;
        }
    },
});

export const { setAllOrders, setWsConnection } = feedSlice.actions;

export default feedSlice.reducer;
