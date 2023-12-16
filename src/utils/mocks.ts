import { Ingredient } from "../types/ingredient-types";
import { IUserData } from '../services/reducers/userReducer';
import { IPostOrder, IOrder } from '../types/order-types';

export const ingredientsMocks: Ingredient[] = [
    {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
    },
    {
        _id: "60666c42cc7b410027a1a9b6",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,
    },
    {
        _id: "60666c42cc7b410027a1a9b7",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0,
    },
];


export const currentIngredientMocks: any = [
    {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
    },
]

export const burgerConstructorMock =
{
    bun: {
        calories: 643,
        carbohydrates: 85,
        fat: 26,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        name: "Флюоресцентная булка R2-D3",
        price: 988,
        proteins: 44,
        type: "bun",
        __v: 0,
        _customId: "50534b47-0b47-4174-b55c-b6efb39fc2be",
        _id: "643d69a5c3f7b9001cfa093d"
    },
    main1: {
        calories: 14,
        carbohydrates: 11,
        fat: 22,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        name: "Соус фирменный Space Sauce",
        price: 80,
        proteins: 50,
        type: "sauce",
        __v: 0,
        _customId: "f90f69f2-8717-436a-a18d-5efa1ad06c99",
        _id: "643d69a5c3f7b9001cfa0943"
    },
    main2: {
        calories: 420,
        carbohydrates: 33,
        fat: 244,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        name: "Мясо бессмертных моллюсков Protostomia",
        price: 1337,
        proteins: 433,
        type: "main",
        __v: 0,
        _customId: "ef4de646-3559-4671-8e80-eab7e27ba9b4",
        _id: "643d69a5c3f7b9001cfa093f"

    }
};

export const fakeUser: IUserData = {
    email: "user.boba@gmail.com",
    name: "UserUser",
};



export const fakeCreatingOrder: { ingredients: string[] } = {
    ingredients: ["60666c42cc7b410027a1a9b1", "609646e4dc916e00276b2870"],
};

export const fakeResultOrder: IPostOrder = {
    "name": "Алмазный мраморно-вельветовый хрустящий бургер",
    "order": {
        "number": 6578
    },
    "success": true
}

export const allOrdersMocks = [
    {
        createdAt: "2023-12-15T23:51:31.719Z",
        ingredients: ['643d69a5c3f7b9001cfa093d'],
        name: "Флюоресцентный бургер",
        number: 29361,
        status: "done",
        updatedAt: "2023-12-15T23:51:32.314Z",
        _id: "657ce68387899c001b8230f6"
    },

    {

        createdAt: "2023-12-15T22:52:11.779Z",
        ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0946', '643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa0949', '643d69a5c3f7b9001cfa094a', '643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093d'],
        name: "Экзо-плантаго space астероидный био-марсианский минеральный флюоресцентный бургер",
        number: 29360,
        status: "done",
        updatedAt: "2023-12-15T22:52:12.234Z",
        _id: "657cd89b87899c001b8230d7"
    },

    {
        createdAt: "2023-12-15T22:21:09.372Z",
        ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
        name: "Флюоресцентный space бургер",
        number: 29359,
        status: "done",
        updatedAt: "2023-12-15T22:21:09.750Z",
        _id: "657cd15587899c001b8230c0"
    }
]

export const fakeCurrentOrder = {
    createdAt: "2023-12-15T22:21:09.372Z",
    ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0943'],
    name: "Флюоресцентный space бургер",
    number: 29359,
    status: "done",
    updatedAt: "2023-12-15T22:21:09.750Z",
    _id: "657cd15587899c001b8230c0"
}
