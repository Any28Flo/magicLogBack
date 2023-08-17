import { Request, Response } from "express";
import { BaseProduct } from "../interfaces/products.interface";
import ProductModel from "../models/Products";

const postProduct = async (req: Request, res: Response) => {
    const product: BaseProduct = req.body;
    try {
        const newProduct = new ProductModel(product);
        await newProduct.save();
        res.status(201).json({
            msg: 'Producto creado exitosamente',
            newProduct
        })


    } catch (error) {
        res.status(500).json({
            msg: 'Comuniquese con soporte'
        })
    }
}

export {
    postProduct
}