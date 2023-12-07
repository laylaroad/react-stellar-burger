import { createSlice } from '@reduxjs/toolkit';
import { IngredientId } from '../../types/ingredient-types';


interface BurgerConstructorState {
  bun: IngredientId | null;
  mains: IngredientId[];
  isLoading: boolean;
  isError: string | null;
}

const initialState: BurgerConstructorState = {
  bun: null,
  mains: [],
  isLoading: false,
  isError: null,
};

interface AddIngredientAction {
  type: string;
  payload: IngredientId;
}

interface DeleteIngredientAction {
  type: string;
  payload: IngredientId;
}

interface MoveIngredientAction {
  type: string;
  payload: {
    indexFrom: number;
    indexTo: number;
    ingredient: IngredientId;
  };
}


const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action: AddIngredientAction) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.mains.push(action.payload);
      }
    },
    deleteIngredient: (state, action: DeleteIngredientAction) => {
      console.log(action.payload);
      state.mains = state.mains.filter(
        (item) => item._customId !== action.payload._customId
      );
    },
    moveIngredient: (state, action: MoveIngredientAction) => {
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.mains.splice(indexFrom, 1);
      state.mains.splice(indexTo, 0, ingredient);
    },
    deleteAllIngredients: (state) => {
      state.mains = [];
      state.bun = null;
    },
  },
});

export const {
  addIngredient,
  deleteIngredient,
  moveIngredient,
  deleteAllIngredients,
} = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;
