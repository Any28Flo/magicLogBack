
import { Router } from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    postUser,
    putUser
} from "../controllers/users";

const usersRoutes = Router();

usersRoutes.get('/', getUsers);

usersRoutes.get('/:id', getUser);

usersRoutes.post('/', postUser);

usersRoutes.put('/:idUser', putUser);

usersRoutes.delete('/:idUser', deleteUser);



export default usersRoutes;
