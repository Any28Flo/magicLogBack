import ProductModel from "../models/Products";
import RoleModel from "../models/Role";
import UserModel from "../models/User";

const isRoleValid = async (role = '') => {
    const existRole = await RoleModel.findOne({ role });
    if (!existRole) {
        throw new Error(`El rol ${role} no esta registrado en la BD`)
    }
}
const isUserExist = async (email: string) => {
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
        throw new Error(`El email: ${email} ya esta registrado`)

    }
}
const isProductExist = async (sku: string) => {
    const existProduct = await ProductModel.findOne({ sku });
    if (existProduct) {
        throw new Error(`El producto con el sku: ${sku} ya esta registrado`)

    }
}
export {
    isRoleValid,
    isUserExist,
    isProductExist
}