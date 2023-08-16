import express, { Request, Response } from "express";
import cors from "cors";

import usersRoutes from '../routes/users.routes';

require('dotenv').config()

export class Server {
    app: any
    port?: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.midlewares();
        this.routes();

    }
    private midlewares() {
        this.app.use(cors())

        this.app.use(express.json())
    }

    private routes() {

        this.app.use('/api/users', usersRoutes)

    }

    public start() {
        this.app.listen(this.port, () => {
            console.log("app is running on port", this.port)
        })
    }

}