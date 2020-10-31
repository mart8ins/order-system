export interface NewOrder {
    userId: number,
    orderId: number,
    brand: string,
    model: string,
    quantity: number,
    created: any,
    recieved: boolean
}