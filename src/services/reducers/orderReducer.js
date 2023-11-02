import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkResponse, apiUrl } from '../../utils/api';
import { deleteIngredient } from './burgerConstructorReducer';

export const getOrderData = createAsyncThunk('order/orderData', async (ingredients, thunkAPI) => {
    try {
        const orderRequestConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ingredients),
        };

        const response = await fetch(`${apiUrl}/orders`, orderRequestConfig);

        if (!response.ok) {
            throw new Error(`Ошибка! Статус: ${response.status}`);
        }

        const data = await checkResponse(response);

        console.log('Received data from API:', data);

        thunkAPI.dispatch(deleteIngredient());

        return data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const initialState = {
    orderModal: false,
    isLoading: false,
    isError: false,
    order: {}
}

const orderSlice = createSlice({
    name: 'order',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getOrderData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getOrderData.fulfilled, (state, action) => {
            state.order = action.payload.order;
            state.orderModal = true;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(getOrderData.rejected, (state, action) => {
            state.orderModal = false;
            state.isLoading = false;
            state.isError = true;
            console.error(action.error);
        });
    }
});

export default orderSlice.reducer;

