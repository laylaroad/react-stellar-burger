import { RootStore } from '../store';
import { IngredientId } from '../../types/ingredient-types';

export const selectBurgerIngredients = (store: RootStore) => store.burgerConstructor.mains;

export const selectBurgerBun = (store: RootStore) => store.burgerConstructor.bun;

export const selectPrice = (store: RootStore) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    return bun
        ? 2 * bun.price + mains.reduce((sum: number, thePrice) => sum + thePrice.price, 0)
        : 0;
};
export const selectAllId = (store: RootStore) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    if (bun && mains) {
        const mainsId = mains.map((item: IngredientId) => item._id);
        return [...mainsId, bun._id];
    }

    return [];
};
