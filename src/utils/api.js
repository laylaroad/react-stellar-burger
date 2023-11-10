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

export async function resetPassword(password) {
    await request('./password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
    });
};

export async function forgotPassword(email) {
    await request('./password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
    });
}



