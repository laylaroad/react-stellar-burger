const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export default function request() {
    return fetch(apiUrl).then(checkResponse);
}

