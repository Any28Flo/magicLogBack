export interface BaseUser {
    usernaname: string
    email: string
    phone: string
    password: string
}

export interface User extends BaseUser {
    id: string
}