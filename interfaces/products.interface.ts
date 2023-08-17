import { Document } from 'mongoose';


export interface BaseProduct extends Document {
    name: string
    sku: string
    amount: number
    price: number
}

export interface Product extends BaseProduct {
    uid: string
}