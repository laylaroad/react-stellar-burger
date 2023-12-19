import burgerConstructorReducer, {
    addIngredient,
    deleteIngredient,
    moveIngredient,
    deleteAllIngredients, initialState
} from './burgerConstructorReducer';

import { burgerConstructorMock } from '../../utils/mocks';


describe('Burger Constructor', () => {

    test('Should be an initialState', () => {
        expect(
            burgerConstructorReducer(undefined,
                { type: 'undefined' })
        ).toEqual(
            initialState
        );
    });

    test('Should add bun', () => {
        expect(
            burgerConstructorReducer(initialState, addIngredient(burgerConstructorMock.bun))
        ).toEqual({ ...initialState, bun: burgerConstructorMock.bun, mains: [] });
        expect(
            burgerConstructorReducer(undefined, addIngredient(burgerConstructorMock.bun))
        ).toEqual({ ...initialState, bun: burgerConstructorMock.bun, mains: [] });
    });

    test('Should add main', () => {
        expect(
            burgerConstructorReducer(initialState, addIngredient(burgerConstructorMock.main1))
        ).toEqual({ ...initialState, mains: [burgerConstructorMock.main1], bun: null });
        expect(
            burgerConstructorReducer(undefined, addIngredient(burgerConstructorMock.main1))
        ).toEqual({ ...initialState, mains: [burgerConstructorMock.main1], bun: null });
    });

    test('Should delete main', () => {
        expect(
            burgerConstructorReducer(initialState, deleteIngredient(burgerConstructorMock.main1))
        ).toEqual({ ...initialState, bun: null, mains: [] });
        expect(
            burgerConstructorReducer(undefined, deleteIngredient(burgerConstructorMock.main1))
        ).toEqual({ ...initialState, bun: null, mains: [] });
        expect(
            burgerConstructorReducer({
                ...initialState,
                mains: [burgerConstructorMock.main1, burgerConstructorMock.main2]
            },
                deleteIngredient(burgerConstructorMock.main1))
        ).toEqual({ ...initialState, bun: null, mains: [burgerConstructorMock.main2] })
    });

    test('Should delete all ingredients', () => {
        expect(
            burgerConstructorReducer(initialState, deleteAllIngredients())
        ).toEqual(initialState);
        expect(
            burgerConstructorReducer(undefined, deleteAllIngredients())
        ).toEqual(initialState);
        expect(
            burgerConstructorReducer(
                {
                    ...initialState, mains: [burgerConstructorMock.main1, burgerConstructorMock.main2],
                    bun: burgerConstructorMock.bun
                },
                deleteAllIngredients())
        ).toEqual({ ...initialState, bun: null, mains: [] })
    });

    test('Should move main', () => {
        expect(
            burgerConstructorReducer({
                ...initialState,
                mains: [burgerConstructorMock.main1, burgerConstructorMock.main2]
            },
                moveIngredient({
                    indexFrom: 0,
                    indexTo: 1,
                    ingredient: burgerConstructorMock.main1
                }))
        ).toEqual({
            ...initialState,
            mains: [burgerConstructorMock.main2, burgerConstructorMock.main1]
        });
        expect(
            burgerConstructorReducer(undefined,
                moveIngredient({
                    indexFrom: 0,
                    indexTo: 1,
                    ingredient: burgerConstructorMock.main1
                }))
        ).toEqual({
            ...initialState,
            mains: [burgerConstructorMock.main1]
        })
    });

});
