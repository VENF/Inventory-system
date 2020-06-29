import { Document, model, Schema } from 'mongoose';

export interface IProvider extends Document {
    name: string;
    lastName: string;
    address: string;
    phone: string;
    date: any;
    company: string;
    dateFormat: string
}

const providerSchema = new Schema({
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
    },
    company: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
});

export default model<IProvider>('providers', providerSchema)