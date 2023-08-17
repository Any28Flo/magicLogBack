import mongoose, { Schema } from 'mongoose';
import { BaseUser } from '../interfaces/users.interface';

const UserSchema = new Schema<BaseUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    rol: {
        type: String,
        required: true,
        enum: ['vendedor', 'comprador', 'admin']
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
})
const UserModel = mongoose.model<BaseUser>('User', UserSchema);

export default UserModel;

