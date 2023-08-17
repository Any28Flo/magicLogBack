import jwt from 'jsonwebtoken';

interface JwtPayload {
    uid: string;
}

export const generateJWT = (uid: JwtPayload) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, "winterIsComming", {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            }
            else {
                resolve(token)
            }
        });
    })
}
