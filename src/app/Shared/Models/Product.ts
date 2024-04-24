export interface Product {
    Id: number,
    productName: string,
    unitPrice: number,
    stockQuantity: number,
    pictureUrl: string,
    description: string,
}

export interface cartItem {
    Id: number,
    productName: string,
    unitPrice: number,
    stockQuantity: number,
    quantity: number,
    pictureUrl: string,
    description: string,
    total: number,
}