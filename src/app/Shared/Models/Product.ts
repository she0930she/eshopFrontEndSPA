export interface Product {
    id: number,
    productName: string,
    unitPrice: number,
    stockQuantity: number,
    pictureUrl: string,
    description: string,
}

export interface CartItem {
    id: number,
    productName: string,
    unitPrice: number,
    stockQuantity: number,
    quantity: number,
    pictureUrl: string,
    description: string,
    total: number,
}