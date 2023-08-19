import { Request, Response } from "express";
import { BaseProduct } from "../interfaces/products.interface";
import ProductModel from "../models/Products";

const postProduct = async (req: Request, res: Response) => {

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
const getProductsByUser = async (req: Request, res: Response) => {
    const user = req.user;
    const id = user?._id;

    try {

        const products = await ProductModel.find({ registerBy: id });

        res.status(201).json({
            msg: 'lista productos',
            products
        })
    } catch (error) {

        throw new Error('Comuniquese con soporte.');
    }
}
const getProducts = async (req: Request, res: Response) => {


    try {

        const products = await ProductModel.find();

        res.status(201).json({
            msg: 'lista productos',
            products
        })
    } catch (error) {

        throw new Error('Comuniquese con soporte.');
    }
}
const getProductsByRole = async (req: Request, res: Response) => {

    const { userId } = req.query;
    const filters: any = {};

    if (userId) {
        filters.registerBy = userId;
    }

    try {

        const products = await ProductModel.find(filters);
        res.status(201).json({
            msg: 'lista productos',
            products
        })
    } catch (error) {

        throw new Error('Comuniquese con soporte.');
    }
}
const getCustomProducts = async (req: Request, res: Response) => {
    const { keyword, sku, sort, min, max } = req.query;

    const filters: any = {};
    const sortOptions: any = {};

    if (min && max) {
        filters.price = { $gte: parseInt(min as string), $lte: parseInt(max as string) };
    }


    if (keyword) {
        filters.name = { $regex: keyword as string, $options: 'i' };
    }

    if (sku) {
        filters.sku = { $regex: sku as string, $options: 'i' };
    }


    if (sort === 'asc') {
        sortOptions.price = 1; // Ascending order
    } else if (sort === 'desc') {
        sortOptions.price = -1; // Descending order
    }

    try {

        const products = await ProductModel.find(filters)
        res.status(201).json({
            msg: 'lista productos',
            products
        })
    } catch (error) {

        throw new Error('Comuniquese con soporte.');
    }
}
export {
    getProductsByUser,
    getProducts,
    postProduct,
    getCustomProducts,
    getProductsByRole
}