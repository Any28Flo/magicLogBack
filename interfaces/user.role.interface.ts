export interface BaseUserRole {
    role: string
    //permissions: string[]
}
export interface UserRole extends BaseUserRole {
    id: string
}