import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { checkResponse, apiUrl } from '../../utils/api';
import { deleteIngredient } from './burgerConstructorReducer';
import { IOrders } from '../../types/order-types';

type Ingredient = {
  IngredientId: string[];
};

interface OrderState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  number: number;
}

interface OrderData {
  order: {
    number: number;
  };
}

export const postOrderData = createAsyncThunk<OrderData, Ingredient>('order/orderData', async (ingredients, thunkAPI) => {
  const orderRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify(ingredients),
  };
  const response = await fetch(`${apiUrl}/orders`, orderRequestConfig);
  const data = await checkResponse(response);
  //@ts-ignore
  thunkAPI.dispatch(deleteIngredient());

  return data;
});



const initialState: OrderState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  number: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postOrderData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(postOrderData.fulfilled, (state, action: PayloadAction<OrderData>) => {
      state.number = action.payload.order.number;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    });
    builder.addCase(postOrderData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      console.error(action.error);
    });
  },
});

export default orderSlice.reducer;

