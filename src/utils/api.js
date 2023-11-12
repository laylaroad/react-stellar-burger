
import { setAuthChecked, setUser } from "../services/reducers/userReducer";

export const apiUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject(err));
}

function request(endPoint, options) {
    return fetch(`${apiUrl}/${endPoint}`, options).then(checkResponse);
}

export async function fetchIngredients() {
    return request('ingredients').then((res) => res.data);
};


// export function forgotPassword(email) {
//     console.log('Происходит восстановление пароля', email);

//     return request('/password-reset', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         body: JSON.stringify({ email }),
//     })
//         .then((res) => {
//             if (res.success) {
//                 return res;
//             } else {
//                 return Promise.reject("Ошибка");
//             }
//         });
// }

// export function resetPassword(password, token) {
//     return request('/password-reset/reset', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         body: JSON.stringify({
//             password: password,
//             token: token
//         }),
//     })
//         .then((res) => {
//             if (res.success) {
//                 return res;
//             } else {
//                 return Promise.reject("Ошибка");
//             }
//         });
// };


// export function userRegister(email, password, name) {
//     return (dispatch) => {
//         return request('auth/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password,
//                 name: name,
//             })
//         })
//             .then(checkResponse)
//             .then((res) => {
//                 localStorage.setItem('accessToken', res.accessToken);
//                 localStorage.setItem('refreshToken', res.refreshToken);
//                 dispatch(setUser(res.user));
//             })
//             .finally(() => {
//                 dispatch(setAuthChecked(true));
//             })
//             .catch((err) => {
//                 console.error(err);
//                 throw err;
//             });
//     };
// }


// export function authLogin(email, password) {
//     return (dispatch) => {
//         return request('/auth/login', {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json;charset=utf-8"
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         })
//             .then(checkResponse)
//             .then((res) => {
//                 if (res.success) {
//                     localStorage.setItem("accessToken", res.accessToken);
//                     localStorage.setItem("refreshToken", res.refreshToken);
//                     dispatch(setUser(res.user));
//                 } else {
//                     return Promise.reject("Ошибка данных с сервера");
//                 }
//             })
//             .finally(() => {
//                 dispatch(setAuthChecked(true));
//             })
//             .catch((err) => {
//                 console.error(err);
//                 throw err;
//             });
//     };
// }
