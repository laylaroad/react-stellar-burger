
export const selectBurgerIngredients = (store) => store.burgerConstructor.mains;

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
            return [...mainsId, store.burgerConstructor.bun._id];
        }
    }
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
