import { createSlice } from "@reduxjs/toolkit";

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
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getUser.fulfilled, (state, action) => {
    //         state.user = action.payload;
    //         state.isAuthChecked = true;
    //         state.accessToken = action.payload.accessToken;
    //     })
    //     .addCase(userRegister.fulfilled, (state, action) => {
    //         state.user = action.payload;
    //         state.isAuthChecked = true;
    //     })
    //     .addCase(login.fulfilled, (state, action) => {
    //         state.user = action.payload;
    //         state.isAuthChecked = true;
    //     })
    // },
});

export const { setAuthChecked, setUser, setEmailChecked } = userSlice.actions;

export default userSlice.reducer;
