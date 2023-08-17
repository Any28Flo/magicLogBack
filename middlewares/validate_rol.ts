import { Request, Response, NextFunction } from "express";
/**
 * TODO
 * - Refactor this function to accept the role as a paramether
 */
const isSellerRole = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            msg: "Se quiere verificar el rol sin validar el token primero"
        })
    }
    const { role, email } = req.user;
    if (role !== 'vendedor') {
        return res.status(401).json({
            msg: `${email} no tiene los permisos suficientes`
        })
    }
    next()

}

const isBuyerRole = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            msg: "Se quiere verificar el rol sin validar el token primero"
        })
    }
    const { role, email } = req.user;
    if (role !== 'comprador') {
        return res.status(401).json({
            msg: `${email} no tiene los permisos suficientes`
        })
    }
    next()

}
const isAdminRole = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(500).json({
            msg: "Se quiere verificar el rol sin validar el token primero"
        })
    }
    const { role, email } = req.user;
    if (role !== 'comprador') {
        return res.status(401).json({
            msg: `${email} no tiene los permisos suficientes`
        })
    }
    next()

}
export {
    isSellerRole,
    isBuyerRole,
    isAdminRole
}