import mongoose, { Schema } from 'mongoose';
import { BaseUserRole } from '../interfaces/user.role.interface';

const RoleSchema = new Schema<BaseUserRole>({
    role: {
        type: String,
        required: true,
        unique: true
    }
})
const RoleModel = mongoose.model<BaseUserRole>('Role', RoleSchema);

export default RoleModel;

