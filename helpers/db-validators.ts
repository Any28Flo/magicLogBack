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
export {
    isRoleValid,
    isUserExist
}