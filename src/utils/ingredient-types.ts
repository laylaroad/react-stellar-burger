export interface Ingredient {

        image: string,
        image_large: string,
        image_mobile: string,
        _id:string,
        name: string,
        type: string,
        proteins:number,
        fat:number,
        carbohydrates: number,
        calories: number,
        price: number,
        __v: number,
        
}

export type IngredientId = Ingredient & { _customId: string };
