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

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    number: 0,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(getOrderData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        });
        builder.addCase(getOrderData.fulfilled, (state, action) => {
            state.number = action.payload.order.number;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
        });
        builder.addCase(getOrderData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            console.error(action.error);
        });
    }
});

export default orderSlice.reducer;

