import { createSlice } from "@reduxjs/toolkit";

import { login, logout, getUserData, register, pathUserData } from '../thunk/user-thunk';

const initialState = {
    user: null,
    isAuthChecked: false,
    isEmailChecked: false,
    error: false,
    accessToken: '',
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
        },
        setEmailChecked: (state, action) => {
            state.isEmailChecked = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthChecked = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.isAuthChecked = true;
            })
            .addCase(pathUserData.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.accessToken = '';
                state.isAuthChecked = false;
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
            })
    },
});

export const { setAuthChecked, setUser, setEmailChecked } = userSlice.actions;

export default userSlice.reducer;
