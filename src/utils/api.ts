
import { setAuthChecked, setUser } from "../services/reducers/userReducer";

import { getUserData } from '../services/thunk/user-thunk';

export const apiUrl = 'https://norma.nomoreparties.space/api';

export const wssUrl = "wss://norma.nomoreparties.space";

interface IRequestOptions extends RequestInit {
    headers: Record<string, string>;
}

export function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject(err));
}

export function request(endPoint: string, options: IRequestOptions) {
    return fetch(`${apiUrl}/${endPoint}`, options).then(checkResponse);
}

export async function fetchIngredients() {
    //@ts-ignore
    return request('ingredients').then((res) => res.data);
};



export const checkUserAuth = () => {
    return (dispatch: any) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUserData())
                .catch((error: any) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
            dispatch(setUser(null));
        }
    };
};
