
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
