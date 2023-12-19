import ingredientsReducer,
{
    showIngredient,
    closeIngredient,
    initialState,
} from './ingredientsReducer';

import { ingredientsMocks, currentIngredientMocks } from '../../utils/mocks';


describe('Ingredients Reducer', () => {
    test('Should be an initialState', () => {
        expect(
            ingredientsReducer(undefined,
                { type: 'undefined' })
        ).toEqual(
            initialState
        );
    });

    test('Should fetch the ingredients data', () => {
        expect(
            ingredientsReducer(initialState, {
                type: 'ingredients/getIngredientsData/pending',
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
        expect(
            ingredientsReducer(undefined, {
                type: 'ingredients/getIngredientsData/pending',
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });

    test('should be fetched successfully', () => {
        expect(
            ingredientsReducer(initialState, {
                type: 'ingredients/getIngredientsData/fulfilled',
                payload: { data: ingredientsMocks },
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            ingredientsArray: ingredientsMocks,
        });
        expect(
            ingredientsReducer(undefined, {
                type: 'ingredients/getIngredientsData/fulfilled',
                payload: { data: ingredientsMocks },
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            ingredientsArray: ingredientsMocks,
        });
    });


    test('Fetch should be rejected', () => {
        expect(
            ingredientsReducer(initialState, {
                type: 'ingredients/getIngredientsData/rejected',
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isError: true,
        });
        expect(
            ingredientsReducer(undefined, {
                type: 'ingredients/getIngredientsData/rejected',
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isError: true,
        });
    });

    test('Should open currentIngredient', () => {
        expect(ingredientsReducer(initialState, showIngredient(currentIngredientMocks))).toEqual({
            ...initialState,
            currentIngredient: currentIngredientMocks
        });
        expect(ingredientsReducer(undefined, showIngredient(currentIngredientMocks))).toEqual({
            ...initialState,
            currentIngredient: currentIngredientMocks
        });
    });
    test('Should close currentIngredient', () => {
        expect(ingredientsReducer(initialState, closeIngredient())).toEqual({
            ...initialState,
            currentIngredient: null
        });
        expect(ingredientsReducer(undefined, closeIngredient())).toEqual({
            ...initialState,
            currentIngredient: null
        });
    });
});
