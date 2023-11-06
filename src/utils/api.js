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

// export async function getOrderData(ingredients) {
//     return request('orders', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(ingredients),
//     })
// };


// export const getOrderData = createAsyncThunk('order/orderData', async (ingredients, thunkAPI) => {
//     const orderRequestConfig = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(ingredients),
//     };

//     const response = await fetch(`${apiUrl}/orders`, orderRequestConfig);
//     const data = await checkResponse(response);

//     thunkAPI.dispatch(deleteIngredient());

//     return data;
// });


// export const fetchIngredients = async () => {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await checkResponse(response);
//         return data;
//     } catch (error) {
//         throw new Error(`Ошибка: ${error.message}`);
//     }
// };





