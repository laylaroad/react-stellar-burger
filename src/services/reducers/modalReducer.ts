import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  type: string;
  isOpen: boolean;
}

const initialState: ModalState = {
  type: '',
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen: (state, action: PayloadAction<string>) => {
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
