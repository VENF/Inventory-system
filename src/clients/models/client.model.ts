import { Document, model, Schema } from 'mongoose';

export interface IClient extends Document {
  name: string;
  lastName: string;
  address: string;
  DNI: number;
  phone: string;
  date: any;
  dateFormat: string;
}


const clientSchema = new Schema({
  DNI: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateFormat: {
    type: String
  }
});

export default model<IClient>('client', clientSchema);
