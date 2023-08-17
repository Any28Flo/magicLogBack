import mongoose, { Schema } from 'mongoose';
import { BaseProduct } from '../interfaces/products.interface';

const ProductSchema = new Schema<BaseProduct>({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true

    },
    amount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

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

