import { setAuthChecked, setUser } from "../services/reducers/userReducer";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { resolveConfig } from "prettier";

export const apiUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

function request(endPoint, options) {
    const res = fetch(`${apiUrl}/${endPoint}`, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });

    return res;

    // .then((res) => {
    //     console.log(res);
    //     return checkResponse(res);
    // })
    // .catch((error) => {
    //     console.error('Ошибка в запросе', error);
    //     return Promise.reject(error);
    // });
}

export async function fetchIngredients() {
    return request('ingredients').then((res) => res.data);
};

//запрос на сброс нового пароля и токена
export async function resetPassword(password, token) {
    request('./password-reset/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, token }),
    });
};

export async function forgotPassword(email) {
    request('./password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ email }),
    });
}

//эндпоинт для регистрации пользователя
export const userRegister = createAsyncThunk(
    'auth/register',
    async (email, password, name) => {
        const res = request('auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            }),
        });

        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);

        return res.user;
    }
);


//обновление токена, когда тот устаревает через 20 мин
const refreshToken = () => {
    return fetch(`${apiUrl}/auth/token`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken")
        })
    }).then(checkResponse);
};

//ф-ция, которая делает запрос к серверу и проверяет токен: запрос с обновлением
//в параметры принимает все те данные, которые уходят в обычный fetch
//ф-ция должна подменить fetch для выполнения запроса с проверкой токена
const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("accessToken", refreshData.accessToken);
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

//проверяем пользователя: для этого делаем запрос данных к серверу;
//если данные успешные, то п-ль авторизован
//если нет – очищаем данные пользователя
export const getUser = () => {
    return (dispatch) => {
        return fetchWithRefresh(`${apiUrl}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.success) {
                dispatch(setUser(res.user));
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        });
    };
};

//эндпоинт для авторизации
//получаем email и password, делаем запрос на сервер
//если запрос успешный, то получаем токены и диспатчим нового пользователя,
// сохраняем его в хранилище
export const login = (email, password) => {
    return (dispatch) => {
        return fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(checkResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch(setUser(res.user));
                } else {
                    return Promise.reject("Ошибка данных с сервера");
                }
            })
            .catch((err) => {
                console.log(err);
            })
            //завершение авторизации, которая проверяется в компоненте protected-route: 
            //ждем, когда завершится процесс авторизации, 
            //чтобы отобразить какой-то компонент
            .finally(() => {
                dispatch(setAuthChecked(true));
            });
    };
};
//эндпоинт для выхода из системы
export const logout = (email, password) => {
    return (dispatch) => {
        return fetch(`${apiUrl}/auth/logout`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(checkResponse)
            .then((res) => {
                if (res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch(setUser(res.user));
                } else {
                    return Promise.reject("Ошибка данных с сервера");
                }
            })
            .catch((err) => {
                console.log(err);
            })
            //завершение авторизации, которая проверяется в компоненте protected-route: 
            //ждем, когда завершится процесс авторизации, 
            //чтобы отобразить какой-то компонент
            .finally(() => {
                dispatch(setAuthChecked(true));
            });
    };
};


//если в localStorage сохранен accessToken, то тогда мы вызываем getUser
//в getUser делаем запрос – если он проходит, то запоминаем пользователя
export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem('accessToken')) {
            dispatch(getUser())
                .catch((error) => {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
            dispatch(setUser(null));
        }
    };
};

