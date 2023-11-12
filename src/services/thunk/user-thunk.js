
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrl } from '../../utils/api';

function request(endPoint, options) {
    return fetch(`${apiUrl}/${endPoint}`, options);
}

export const fetchForgotPass = createAsyncThunk(
    "auth/fetchForgotPass",
    async (email) => {
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
    "auth/fetchResetPass",
    async ({ password, token }) => {
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





