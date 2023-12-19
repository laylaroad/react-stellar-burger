export interface IOrder {
    _id: string;
    ingredients: Array<string>;
    status: string | undefined;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;

};


export type IOrders = {
    success: boolean | null;
    orders: IOrder[];
    total: number;
    totalToday: number;
};


export interface IPostOrder {
    "name": string,
    "order": {
        "number": number
    },
    "success": boolean
}
