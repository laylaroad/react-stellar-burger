import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { login, logout, getUserData, register, pathUserData } from '../thunk/user-thunk';


interface IUserData {
    id: string;
    username: string;
    email: string;
 token: string;
  }
  
  interface IUserState {
    user: IUserData | null;
    isAuthChecked: boolean;
    isEmailChecked: boolean;
    error: boolean;
    accessToken: string;
  }
  
  type TReducerPayloads = {
    setAuthChecked: boolean;
    setUser: IUserData | null;
    setEmailChecked: boolean;
    setError: boolean;
  };
  
  const initialState: IUserState = {
    user: null,
    isAuthChecked: false,
    isEmailChecked: false,
    error: false,
    accessToken: "",
  };
  
  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setAuthChecked: (state, action: PayloadAction<TReducerPayloads["setAuthChecked"]>) => {
        state.isAuthChecked = action.payload;
      },
      setUser: (state, action: PayloadAction<TReducerPayloads["setUser"]>) => {
        state.user = action.payload;
      },
      setEmailChecked: (state, action: PayloadAction<TReducerPayloads["setEmailChecked"]>) => {
        state.isEmailChecked = action.payload;
      },
      setError: (state, action: PayloadAction<TReducerPayloads["setError"]>) => {
        state.error = action.payload;
      },
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
