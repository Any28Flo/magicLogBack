import { Router } from "express";
import { body } from "express-validator";
import { postProduct } from "../controllers/product";
import validateFields from "../middlewares/validate_fields";
import { isProductExist } from "../helpers/db-validators";

const productRoutes = Router();

productRoutes.post('/', [
    body('sku').notEmpty().withMessage('El sku es requerido').custom(isProductExist),
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('amount').notEmpty().withMessage('La cantidad es requerido'),
    body('price').notEmpty().withMessage('El precio es requerido'),
    validateFields
], postProduct)

export default productRoutes;