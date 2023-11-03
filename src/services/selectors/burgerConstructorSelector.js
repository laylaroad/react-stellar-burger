
// export const selectBurgerIngredients = createSelector(
//     (state) => state.burgerConstructor,
//     (burgerConstructor) => burgerConstructor.ingredients
// )

export const selectBurgerIngredients = (store) => store.burgerConstructor.mains;

// export const selectBurgerBun = createSelector(
//     (state) => state.burgerConstructor,
//     (burgerConstructor) => burgerConstructor.bun
// );

export const selectBurgerBun = (store) => store.burgerConstructor.bun;

export const selectPrice = (store) => {
    if (store.burgerConstructor.bun) {
        return store.burgerConstructor.mains.reduce(
            (sum, thePrice) => (sum += thePrice.price),
            2 * store.burgerConstructor.bun.price
        );
    } else {
        return 0;
    }
};

export const selectAllId = (store) => {
    if (store.burgerConstructor.bun) {
        if (store.burgerConstructor.mains) {
            const mainsId = store.burgerConstructor.mains.map(
                (item) => item._id
            );
            return [...mainsId, store, store.burgerConstructor.bun._id];
        }
    }
};
