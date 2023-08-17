import { Request, Response } from "express";
import { BaseProduct } from "../interfaces/products.interface";
import ProductModel from "../models/Products";

const postProduct = async (req: Request, res: Response) => {
    console.log(req.user)
    console.log(req.uid)

    const product: BaseProduct = req.body;
    try {
        const newProduct: BaseProduct = new ProductModel(product);
        newProduct.registerBy = req.user?._id;
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