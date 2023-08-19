import { Router } from "express";
import { body } from "express-validator";

import validateJWT from "../middlewares/validate_jwt";
import validateFields from "../middlewares/validate_fields";


import { isProductExist } from "../helpers/db-validators";
import { isAdminRole, isBuyerRole, isSellerRole } from "../middlewares/validate_rol";

import {
    postProduct,
    getProductsByUser,
    getProducts,
    getCustomProducts,
    getProductsByRole
} from "../controllers/product";

const productRoutes = Router();

productRoutes.post('/', [
    validateJWT,
    isSellerRole,
    body('sku').notEmpty().withMessage('El sku es requerido').custom(isProductExist),
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('amount').notEmpty().withMessage('La cantidad es requerido'),
    body('price').notEmpty().withMessage('El precio es requerido'),
    validateFields
], postProduct)

productRoutes.get('/', [
    validateJWT,
    isSellerRole
], getProductsByUser)


productRoutes.get('/lista-productos', [
    validateJWT,
    isBuyerRole,
], getProducts)

productRoutes.get('/lista-custom-products', [
    validateJWT,
    isBuyerRole,
], getCustomProducts)

productRoutes.get('/productos-admin', [
    validateJWT,
    isAdminRole,
], getProductsByRole)

productRoutes.get('/lista-productos-admin', [
    validateJWT,
    isAdminRole,
], getProductsByRole)


productRoutes.get('/lista-productos-role', [
    validateJWT,
    isAdminRole,
], getProductsByRole)

export default productRoutes;