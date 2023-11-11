import { setAuthChecked, setUser } from "../services/reducers/userReducer";

export const apiUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}

async function request(endPoints, options) {
    const res = await fetch(`${apiUrl}/${endPoints}`, options);
    return checkResponse(res);
}

export async function fetchIngredients() {
    return request('ingredients').then((res) => res.data);
};

//запрос на сброс нового пароля и токена
export async function resetPassword(password, token) {
    await request('./password-reset/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, token }),
    });
};

export async function forgotPassword(email) {
    await request('./password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
}

//создание нового пользователя
//? что делает юзерДата?
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${apiUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User registration successful:', data);
        return data;
    } catch (error) {
        console.error('Error registering user:', error.message);
        throw error;
    }
};

//обновление токена?
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

//установка токена?
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

//авторизация пользователя?
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

//получаем email и password, делаем запрос на сервер
//если запрос успешный, то получаем токены и диспатчим нового пользователя, сохраняем его в хранилище
export const login = (email, password) => {
    return (dispatch) => {
        return fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
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
            //ждем, когда завершится процесс авторизации, чтобы отобразить какой-то компонент
            .finally(() => {
                dispatch(setAuthChecked(true));
            });
    };
};

//?
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

