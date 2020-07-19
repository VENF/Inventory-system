import {Document, Schema, model} from 'mongoose';

export interface ISales extends Document {
    DNI: string;
    name: string;
    lastName: string;
    list: Array<object>;
    total: number;
    date: Date;
    dateFormat: string;
}

const salesSchema = new Schema({
    DNI: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    list: [
        {
            type: Schema.Types.ObjectId,
            ref: 'products',
            default: []
        }
    ],
    total: Number,
    date: {
        type: Date,
        default: Date.now
    },
    dateFormat: {
        type: String
    },
})

export default model<ISales>('sale', salesSchema);