
import { createAsyncThunk } from '@reduxjs/toolkit';

import { request, checkResponse } from '../../utils/api';
import { setUser, setAuthChecked } from '../reducers/userReducer';

export const fetchForgotPass = createAsyncThunk(
    "auth/fetchForgotPass",
    async (email: string) => {
        const res = await request('password-reset', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ email }),
        });
        console.log('Raw Response:', res);

        return res.json();
    }
);

export const fetchResetPass = createAsyncThunk(
    'auth/fetchResetPass',
    async ({ password, token }: { password: string; token: string }) => {
        const res = await request('password-reset/reset', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ password, token }),
        });
        return res.json();
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: { email: string; password: string }, { dispatch }) => {
        const res = await fetchWithRefresh('auth/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = res;

        if (data.success) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            dispatch(setUser(data.user));
            dispatch(setAuthChecked(true));
        } else {
            return Promise.reject("Ошибка данных с сервера");
        }

        return data;
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        const token = localStorage.getItem("refreshToken");
        const res = await fetchWithRefresh('auth/logout', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                token,
            })
        });
        const data = res;
        console.log(data);
        if (data.success) {
            localStorage.removeItem('refsreshToken');
            localStorage.removeItem('accessToken');
        } else {
            return Promise.reject("Ошибка данных с сервера");
        }

        return data;
    }
);

export const getUserData = createAsyncThunk(
    'auth/getUserData',
    async () => {
        const res = await fetchWithRefresh('auth/user', {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: localStorage.getItem("accessToken"),
            },
        });

        const data = res;

        if (data.success) {
            return data;
        } else {
            throw new Error("Ошибка данных с сервера");
        }
    }
);

export const register = createAsyncThunk('auth/register', async ({ email, password, name }: { email: string; password: string; name: string }) => {
    try {
        console.log('Registration initiated:', { email, name });

        const res = await fetchWithRefresh('auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ email, password, name }),
        });

        console.log('Registration response:', res);

        const data = await checkResponse(res);
        console.log('Response data:', data);

        if (data.success) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
        } else {
            console.error('Server error during registration:', data.errorMessage);
            return Promise.reject('Ошибка данных с сервера');
        }

        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        return Promise.reject('Ошибка при регистрации пользователя');
    }
});

export const pathUserData = createAsyncThunk(
    'auth/pathUserData',
    async ({ email, password, name }: { email: string; password: string; name: string }) => {
        const res = await fetchWithRefresh("auth/user", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({
                email,
                password,
                name,
            }),
        });

        const data = await checkResponse(res);

        if (data.success) {
            return data;
        } else {
            throw new Error("Ошибка данных с сервера");
        }
    }
);

export const refreshToken = () => {
    return request('auth/token', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        }),
    });
};

export const fetchWithRefresh = async (endpoint: string, options: any) => {
    try {
        const res = await request(endpoint, options);
        return res;
    } catch (err) {
        if (err instanceof Error) {
            if (err.message === 'jwt expired') {
                const refreshData = await refreshToken();
                if (!refreshData.success) {
                    return Promise.reject(refreshData);
                }
                localStorage.setItem('accessToken', refreshData.accessToken);
                localStorage.setItem('refreshToken', refreshData.refreshToken);
                options.headers.authorization = refreshData.accessToken;
                const res = await request(endpoint, options);
                return res;
            } else {
                return Promise.reject(err);
            }
        } else {
            return Promise.reject(new Error('Unknown error occurred'));
        }
    }
};
