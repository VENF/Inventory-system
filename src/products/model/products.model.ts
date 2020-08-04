import { Document, model, Schema } from 'mongoose';

export interface IProduct extends Document {
  code: string;
  type: string;
  size: string;
  price: number;
  brand: string;
  quantity: number;
  date: Date;
  dateFormat: string;
  provider: Schema.Types.ObjectId;
}

const productSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['Jeans', 'Shirts', 'Shoes', 'Sweater'],
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateFormat: {
    type: String
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'providers'
  }
});

export default model<IProduct>('product', productSchema);
