import { Request, Response } from "express";
import { BaseProduct } from "../interfaces/products.interface";
import ProductModel from "../models/Products";
import UserModel from "../models/User";

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
const getCustomProducts = async (req: Request, res: Response) => {
    const { keyword, sku, sort, orderBy } = req.query;

    const filters: any = {};
    const sortOptions: any = {};


    if (!keyword || typeof keyword !== 'string') {
        return res.status(400).json({ error: 'Parametro invalido, falta filtro keyword' });
    }

    if (keyword) {
        const keywordPattern = new RegExp(keyword, 'i');
        filters.name = keywordPattern;
    }

    if (sku) {
        filters.sku = sku;
    }

    if (orderBy) {
        sortOptions[orderBy as string] = 1; // Ascending order
    }
    if (sort === 'asc') {
        sortOptions.price = 1; // Ascending order
    } else if (sort === 'desc') {
        sortOptions.price = -1; // Descending order
    }



    try {

        const products = await ProductModel.find(filters).sort(sortOptions);

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
    getCustomProducts
}