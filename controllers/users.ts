import { Request, Response } from "express";
import { User } from "../interfaces/users.interface";
import bcrypt from "bcrypt";

import UserModel from "../models/User";


const getUsers = (req: Request, res: Response) => {
    res.status(200).send('get user routes')
}
const getUser = (req: Request, res: Response) => {
    res.status(200).send('get user')
}
const postUser = async (req: Request, res: Response) => {


    const user: User = req.body;
    const salt = 10;
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = new UserModel(user);
    try {
        await newUser.save();
        res.status(201).json({
            msg: 'Usuario creado exitosamente'
            //add token
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Sucedio un error'
            //add token
        })
    }

}
const putUser = (req: Request, res: Response) => {
    res.status(200)
}
const deleteUser = (req: Request, res: Response) => {
    res.send('user routes')
};
export {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser

}