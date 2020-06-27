import { Document, model, Schema } from 'mongoose';

interface IClient extends Document{}

const clientSchema = new Schema({
    DNI: {
        type: Number,
        required: true
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
    }
})

export default model<IClient>('client', clientSchema)