import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { BaseUser, User } from "../interfaces/users.interface";
import UserModel from "../models/User";
require('dotenv').config()

declare module "express-serve-static-core" {
    interface Request {
        uid?: string;
        user?: BaseUser | null
    }
}

interface JwtPayload {
    uid: string
}


const validateJWT = async (req: Request, res: Response, next: NextFunction) => {


    const token = req.header('magic-log-token');
    if (!token) {
        return res.status(401).json({
            msg: "Token faltante"
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;

        //req.uid = user.uid;
        const user = await UserModel.findById(uid)

        req.uid = uid;
        req.user = user;

        next()

    } catch (error) {
        return res.status(401).json({
            msg: "Token no valido"
        })
    }

}
export default validateJWT