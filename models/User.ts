import mongoose, { Schema } from 'mongoose';
import { BaseUser } from '../interfaces/users.interface';
import { userInfo } from 'os';

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
    role: {
        type: String,
        required: true,
        enum: ['vendedor', 'comprador', 'admin']
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
})
UserSchema.methods.toJSON = function () {
    const user = this?.toObject();
    if (!user) {
        return {};
    }
    //Remove fields __v and  password
    const { __v, password, ...newUser } = user;

    return newUser

}

const UserModel = mongoose.model<BaseUser>('User', UserSchema);

export default UserModel;

