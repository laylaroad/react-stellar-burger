
import { number } from "prop-types";
import orderReducer, { initialState } from "./orderReducer";


describe('Order Reducer', () => {

    test('Should be an initial state', () => {
        expect(
            orderReducer(undefined,
                { type: undefined })).toEqual(initialState)
    });

    test('Should handle a pending request', () => {
        expect(
            orderReducer(initialState,
                {
                    type: 'order/orderData/pending',
                })
        ).toEqual({
            ...initialState,
            isLoading: true,
            isError: false,
            isSuccess: false,
        });

        expect(
            orderReducer(undefined,
                {
                    type: 'order/orderData/pending',
                })
        ).toEqual({
            ...initialState,
            isLoading: true,
            isError: false,
            isSuccess: false,
        });

    });

    test('Should handle a fulfilled request', () => {
        expect(
            orderReducer(initialState,
                {
                    type: 'order/orderData/fulfilled',
                    payload: {
                        order: {
                            number: 65722
                        }
                    }
                })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isError: false,
            isSuccess: true,
            number: 65722,
        });
        expect(
            orderReducer(undefined,
                {
                    type: 'order/orderData/fulfilled',
                    payload: {
                        order: {
                            number: 65722
                        }
                    }
                })
        ).toEqual({
            ...initialState,
            isLoading: false,
            isError: false,
            isSuccess: true,
            number: 65722,
        });
    });

    test('Should handle a rejected request', () => {
        expect(
            orderReducer(initialState,
                {
                    type: 'order/orderData/rejected',
                })
        ).toEqual({
            isLoading: false,
            isError: true,
            isSuccess: false,
            number: 0,
        });
        expect(
            orderReducer(undefined,
                {
                    type: 'order/orderData/rejected',
                })
        ).toEqual({
            isLoading: false,
            isError: true,
            isSuccess: false,
            number: 0,
        });
    });
});


