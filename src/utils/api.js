export const apiUrl = 'https://norma.nomoreparties.space/api';

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
}

export default function request() {
    return fetch(apiUrl).then(checkResponse);
}

export const fetchIngredients = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await checkResponse(response);
        return data;
    } catch (error) {
        throw new Error(`Ошибка: ${error.message}`);
    }
};





