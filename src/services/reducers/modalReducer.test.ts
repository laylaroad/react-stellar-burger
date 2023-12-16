
import modalReducer, { modalOpen, modalClose, initialState } from './modalReducer';

describe('Tetsing modal reducer', () => {

    test('should be an initialState', () => {
        expect(modalReducer(undefined, { type: undefined })).toEqual(initialState)
    });

    test('should handle modalOpen action', () => {
        expect(modalReducer(initialState, modalOpen('type'))).toEqual({
            isOpen: true,
            type: 'type'
        });
        expect(modalReducer(undefined, modalOpen('type'))).toEqual({
            isOpen: true,
            type: 'type'
        });
    });

    test('should handle modalClose action', () => {
        expect(modalReducer(initialState, modalClose())).toEqual({
            isOpen: false,
            type: ''
        });
        expect(modalReducer(undefined, modalClose())).toEqual({
            isOpen: false,
            type: ''
        });
    });
});



























// describe('Modal Reducer', () => {
//     it('should handle modalOpen action', () => {
//         const action = modalOpen('some-payload');
//         const nextState = modalReducer(initialState, action);

//         // Make assertions based on the expected behavior
//         expect(nextState.type).toEqual('some-payload');
//         expect(nextState.isOpen).toEqual(true);

//         // Check if type is not undefined
//         expect(nextState.type).not.toBeUndefined();
//     });

//     it('should handle modalClose action', () => {
//         const action = modalClose();
//         const nextState = modalReducer(initialState, action);

//         // Make assertions based on the expected behavior
//         expect(nextState.type).toEqual('');
//         expect(nextState.isOpen).toEqual(false);
//     });
// });




