import { Request, Response } from 'express';
import Client from '../models/client.model';

export const RegisterClient = async (req: Request, res: Response): Promise<Response> => {
    const data: IClient = req.body;
    try {
        const client = new Client(data);
        await client.save();
        return res.status(200).json({
            msg: 'operation successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const searchClient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const client: IClient | any = await Client.findOne({ DNI: req.params.DNI}, { _id: 0, __v: 0});
        if(!client){
            return res.status(404).json({
                msg: 'client not found'
            })
        }else{
            const date = client.date = client.date.toISOString().substring(0,10);
           return res.status(200).json({
                name: client.name,
                lastName: client.lastName,
                address: client.address,
                phone: client.phone,
                DNI: client.DNI,
                date: date
           })
        }
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const deleteClient = async (req: Request, res: Response) => {
    try {
        const deleted = await Client.findOneAndDelete({ DNI: req.params.DNI });
        if(!deleted){
            return res.status(404).json({
                msg: 'client not found'
            })
        }else{
            return res.status(200).json({
                msg: 'client has been deleted successfully'
            })  
        }
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const updateClient = async (req: Request, res: Response) => {
    try {
        const client = await Client.findOne({ DNI: req.params.DNI}, { _id: 0, __v: 0});
        if(!client){
            return res.status(404).json({
                msg: 'client not found'
            })
        }else{
            const clientUpdated = await Client.updateOne({DNI: req.params.DNI}, {
                name: req.body.name,
                lastName:req.body.lastName,
                address: req.body.address,
                phone: req.body.phone,
            })
            if(clientUpdated.nModified === 1){
                return res.status(200).json({
                    msg: 'operation successfully'
                })
            }else{
                return res.status(412).json({
                    msg: 'no changes made'
                })  
            }
        }
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}