import feedReducer,
{ setAllOrders, initialState } from "./feedReducer";
import { allOrdersMocks } from '../../utils/mocks';


describe('Feed Reducer', () => {
    test('Should be an initialState', () => {
        expect(
            feedReducer(undefined,
                { type: 'undefined' })
        ).toEqual(
            initialState
        );
    });

    test('Should set all orders', () => {
        expect(
            feedReducer(initialState, setAllOrders(allOrdersMocks))
        ).toEqual({ ...initialState, allOrders: allOrdersMocks });
        expect(
            feedReducer(undefined, setAllOrders(allOrdersMocks))
        ).toEqual({ ...initialState, allOrders: allOrdersMocks });
    });

});
