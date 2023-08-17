import { connect } from "mongoose";
require('dotenv').config()

const startDatabase = async () => {
    const user = process.env.MONGO_USER
    const pass = process.env.MONGO_PASS
    try {
        await connect(`mongodb+srv://${user}:${pass}@cluster0.tn7rppu.mongodb.net/?retryWrites=true&w=majority`)
        console.log(`Database running`);
    } catch (error) {
        throw new Error(`Fail to connect `)

    }
}
export default startDatabase;