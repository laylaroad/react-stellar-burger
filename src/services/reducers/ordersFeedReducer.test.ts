import ordersFeedReducer,
{
    setCurrentOrder,
    initialState
}
    from './ordersFeedReducer';

import { fakeCurrentOrder } from '../../utils/mocks';

describe('Orders Feed Reducer', () => {

    test('Should be an initialState', () => {
        expect(
            ordersFeedReducer(undefined,
                { type: 'undefined' })
        ).toEqual(
            initialState
        );
    });

    // test('Should set current order', () => {
    //     expect(
    //         ordersFeedReducer(initialState, setCurrentOrder(fakeCurrentOrder))
    //     ).toEqual({ ...initialState, setCurrentOrder: fakeCurrentOrder });
    // });


});
