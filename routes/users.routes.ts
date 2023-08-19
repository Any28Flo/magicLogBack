
import { Router } from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    postUser,
    putUser
} from "../controllers/users";

import { body } from "express-validator";

import validateFields from "../middlewares/validate_fields";
import { isRoleValid, isUserExist } from "../helpers/db-validators";
import validateJWT from "../middlewares/validate_jwt";
import { isAdminRole } from "../middlewares/validate_rol";

const usersRoutes = Router();

usersRoutes.get('/users-by-rol', [
    validateJWT,
    isAdminRole,
], getUsers);


usersRoutes.post('/',
    [
        body('email').isEmail().withMessage('El correo no es valido').custom(isUserExist),
        body('password').notEmpty().withMessage('El password es requerido').isLength({ min: 6 }).withMessage('El password debe de ser de mas de 6 letras'),
        body('role').custom(isRoleValid),
        validateFields
    ], postUser);

usersRoutes.put('/:idUser', putUser);

usersRoutes.delete('/:idUser', deleteUser);



export default usersRoutes;
