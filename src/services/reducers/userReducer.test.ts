import userReducer, {
    setAuthChecked,
    setUser,
    setError,
    setEmailChecked,
    initialState
} from './userReducer';

import { fakeUser } from '../../utils/mocks';

describe('User Reducer', () => {

    test('Should be an initialState', () => {
        expect(
            userReducer(undefined,
                { type: 'undefined' })
        ).toEqual(
            initialState
        );
    });

    test('Should handle set isAuthChecked', () => {
        expect(
            userReducer(initialState, setAuthChecked(true))
        ).toEqual({ ...initialState, isAuthChecked: true })

        expect(
            userReducer(undefined, setAuthChecked(true))
        ).toEqual({ ...initialState, isAuthChecked: true })

    });

    test('Should set user', () => {
        expect(
            userReducer(initialState, setUser(fakeUser))
        ).toEqual({ ...initialState, user: fakeUser })
        expect(
            userReducer(undefined, setUser(fakeUser))
        ).toEqual({ ...initialState, user: fakeUser })
    });

    test('Should set emailChecked', () => {
        expect(
            userReducer(initialState, setEmailChecked(true))
        ).toEqual({ ...initialState, isEmailChecked: true })

        expect(
            userReducer(undefined, setEmailChecked(true))
        ).toEqual({ ...initialState, isEmailChecked: true })
    });

    test('Should set error', () => {
        expect(
            userReducer(initialState, setError(true))
        ).toEqual({ ...initialState, error: true })

        expect(
            userReducer(undefined, setError(true))
        ).toEqual({ ...initialState, error: true })
    });

    test('Should handle user response', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: 'auth/getUserData/fulfilled',
                    payload: fakeUser
                })
        ).toEqual({
            ...initialState,
            user: fakeUser,
            isAuthChecked: true,
        });

        expect(
            userReducer(
                undefined,
                {
                    type: 'auth/getUserData/fulfilled',
                    payload: fakeUser
                })
        ).toEqual({
            ...initialState,
            user: fakeUser,
            isAuthChecked: true,

        });
    })

    test('Should handle register', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: 'auth/register/fulfilled',
                    payload: {
                        user: fakeUser,
                        accessToken: '6256372921930des1'
                    }
                }
            )
        ).toEqual({
            ...initialState, user: fakeUser,
            accessToken: '6256372921930des1',
            isAuthChecked: true
        })

        expect(
            userReducer(
                undefined,
                {
                    type: 'auth/register/fulfilled',
                    payload: {
                        user: fakeUser,
                        accessToken: '6256372921930des1'
                    }
                }
            )
        ).toEqual({
            ...initialState, user: fakeUser,
            accessToken: '6256372921930des1',
            isAuthChecked: true
        })
    });

    test('Should handle login', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: 'auth/login/fulfilled',
                    payload: {
                        user: fakeUser,
                        accessToken: '6256372921930des1'
                    }
                }
            )
        ).toEqual(({
            ...initialState, user: fakeUser,
            accessToken: '6256372921930des1',
            isAuthChecked: true
        }))

        expect(
            userReducer(
                undefined,
                {
                    type: 'auth/login/fulfilled',
                    payload: {
                        user: fakeUser,
                        accessToken: '6256372921930des1'
                    }
                }
            )
        ).toEqual(({
            ...initialState, user: fakeUser,
            accessToken: '6256372921930des1',
            isAuthChecked: true
        }));
    });

    test('Should handle pathUserData', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: 'auth/pathUserData/fulfilled',
                    payload: fakeUser,
                }
            )
        ).toEqual(({
            ...initialState, user: fakeUser,
        }));
        expect(
            userReducer(
                undefined,
                {
                    type: 'auth/pathUserData/fulfilled',
                    payload: fakeUser,
                }
            )
        ).toEqual(({
            ...initialState, user: fakeUser,
        }));

    });

    test('Should handle logout', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: 'auth/logout/fulfilled',
                    payload: null,
                    accessToken: '',
                }
            )
        ).toEqual(({
            ...initialState, user: null, accessToken: '', isAuthChecked: false
        }));
        expect(
            userReducer(
                undefined,
                {
                    type: 'auth/logout/fulfilled',
                    payload: null,
                    accessToken: '',
                }
            )
        ).toEqual(({
            ...initialState, user: null, accessToken: '', isAuthChecked: false
        }));
    });
})
