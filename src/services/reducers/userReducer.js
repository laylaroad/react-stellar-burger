import { createSlice } from "@reduxjs/toolkit";

import { getUser, login, registerUser } from '../../utils/api';

const initialState = {
    user: null,
    isAuthChecked: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthChecked: (state, action) => {
            state.isAuthChecked = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
            })
    },
});

export const { setAuthChecked, setUser } = userSlice.actions;

export default userSlice.reducer;
