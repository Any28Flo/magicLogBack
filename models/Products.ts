import mongoose, { Schema } from 'mongoose';
import { BaseProduct } from '../interfaces/products.interface';
import UserModel from './User';

const ProductSchema = new Schema<BaseProduct>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sku: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    registerBy: {
        type: Schema.Types.ObjectId, ref: UserModel
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
})
ProductSchema.methods.toJSON = function () {
    const product = this?.toObject();
    if (!product) {
        return {};
    }
    //Remove fields __v and  password
    const { __v, password, _id, ...newProduct } = product;
    newProduct.uid = _id;

    return newProduct

}
const ProductModel = mongoose.model<BaseProduct>('Product', ProductSchema);

export default ProductModel;

