import express, { Request, Response } from "express";
import cors from "cors";

import usersRoutes from '../routes/users.routes';
import productRoutes from '../routes/products.routes';


import authRoutes from "../routes/auth";
import startDatabase from "../database/mongo.config";
require('dotenv').config()

export class Server {
    app: any
    port?: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.connectDB();
        this.midlewares();
        this.routes();

    }
    async connectDB() {
        await startDatabase()
    }
    private midlewares() {
        this.app.use(cors())

        this.app.use(express.json())
    }

    private routes() {
        this.app.use('/', (req: Request, res: Response) => {
            res.send("Hello World");
        })
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/products', productRoutes)
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log("app is running on port", this.port)
        })
    }

}