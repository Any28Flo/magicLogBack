import { Request, Response } from "express";
import { BaseUser, User } from "../interfaces/users.interface";


const getUsers = (req: Request, res: Response) => {
    res.status(200).send('get user routes')
}
const getUser = (req: Request, res: Response) => {
    res.status(200).send('get user')
}
const postUser = (req: Request, res: Response) => {
    const user: BaseUser = req.body;

    res.status(201).json({ msg: 'put user routes', user })
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