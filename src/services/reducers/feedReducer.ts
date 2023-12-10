import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
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
