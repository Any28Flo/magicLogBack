import { Document } from 'mongoose';


export interface BaseProduct extends Document {
    name: string
    sku: string
    amount: number
    price: number
    registerBy: any
}

export interface Product extends BaseProduct {
    uid: string
}