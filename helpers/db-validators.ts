import RoleModel from "../models/Role";

const isRoleValid = async (rol = '') => {
    const existRole = await RoleModel.findOne({ rol });
    if (!existRole) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`)
    }
}
export {
    isRoleValid
}