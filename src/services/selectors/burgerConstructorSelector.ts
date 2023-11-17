
export const selectBurgerIngredients = (store: any) => store.burgerConstructor.mains;

export const selectBurgerBun = (store: any) => store.burgerConstructor.bun;

export const selectPrice = (store: any) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    return bun
        ? 2 * bun.price + mains.reduce((sum: any, thePrice: any) => sum + thePrice.price, 0)
        : 0;
};
export const selectAllId = (store: any) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    if (bun && mains) {
        const mainsId = mains.map((item: any) => item._id);
        return [...mainsId, bun._id];
    }

    return [];
};
