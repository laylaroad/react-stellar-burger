
export const selectBurgerIngredients = (store) => store.burgerConstructor.mains;

export const selectBurgerBun = (store) => store.burgerConstructor.bun;

export const selectPrice = (store) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    return bun
        ? 2 * bun.price + mains.reduce((sum, thePrice) => sum + thePrice.price, 0)
        : 0;
};
export const selectAllId = (store) => {
    const bun = store.burgerConstructor.bun;
    const mains = store.burgerConstructor.mains;

    if (bun && mains) {
        const mainsId = mains.map((item) => item._id);
        return [...mainsId, bun._id];
    }

    return [];
};


// export const selectCount = (store, id) => {
//     if (store.burgerConstructor.bun) {
//         if (store.burgerConstructor.mains) {
//             const allIngredients = [store.burgerConstructor.bun, store.burgerConstructor.mains];
//             return allIngredients.filter((item) => item && item._id === id).length || 0;
//         } else {
//             return 0; // No mains, return 0
//         }
//     } else {
//         return 0; // No bun, return 0
//     }
// };
