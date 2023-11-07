import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    isOpen: false
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state, action) => {
            state.type = action.payload;
            state.isOpen = true;
        },
        modalClose: (state) => {
            state.type = '';
            state.isOpen = false;
        },
    },
});

export const { modalOpen, modalClose } = modalSlice.actions;

export default modalSlice.reducer;
