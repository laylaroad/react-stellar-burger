export const apiUrl = 'https://norma.nomoreparties.space/api';

export const checkResponse = async (res) => {
    if (!res.ok) {
        console.log(`Error response status: ${res.status}`);
        throw new Error(`Ошибка: ${res.status}`);
    }
    const data = await res.json();
    console.log('Response data:', data);
    return data;
};
export const fetchIngredients = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await checkResponse(response);
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('API request error:', error);
        throw new Error(`Ошибка: ${error.message}`);
    }
};




