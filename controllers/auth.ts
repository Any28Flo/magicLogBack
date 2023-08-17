import { Request, Response } from "express";

import UserModel from "../models/User";
import bcrypt from "bcrypt";
import { generateJWT } from "../helpers/generate-jwt";

const login = async (req: Request, res: Response) => {
    console.log('/login')
    console.log(req.body)
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({
                msg: "Usuario/ Password no son correctos"
            })
        }
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario/ Password no son correctos"
            })
        }
        const token = await generateJWT(user.id);

        res.status(200).json({
            msg: 'login success',
            token,
            user
        })


    } catch (error) {
        res.status(500).json({
            msg: 'Comuniquese con soporte'
        })
    }


}
export {
    login
}