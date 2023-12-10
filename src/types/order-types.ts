export interface IOrder {
    _id: string;
    ingredients: Array<string>;
    status: boolean | null;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;

};


export type IOrders = {
    success: boolean | null;
    orders: Array<Omit<IOrder, 'owner'>>;
    total: number;
    totalToday: number;
};

