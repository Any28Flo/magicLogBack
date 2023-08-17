
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

const usersRoutes = Router();

usersRoutes.get('/', getUsers);

usersRoutes.get('/:id', getUser);

usersRoutes.post('/',
    [
        body('email').isEmail().withMessage('El correo no es valido'),
        body('password').notEmpty().withMessage('El password es requerido').isLength({ min: 6 }).withMessage('El password debe de ser de mas de 6 letras'),
        body('rol').notEmpty().withMessage('Username  es requerido es requerido'),
        validateFields
    ], postUser);

usersRoutes.put('/:idUser', putUser);

usersRoutes.delete('/:idUser', deleteUser);



export default usersRoutes;
