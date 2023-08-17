import { Document } from 'mongoose';

enum Role {
    vendedor = 'vendedor',
    comprador = 'comprador',
    admin = 'admin'
}
export interface BaseUser extends Document {
    email: string
    password: string,
    role: Role
}

export interface User extends BaseUser {
    uid: string
}