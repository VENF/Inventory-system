import { Request, Response } from 'express';
import Provider, { IProvider } from '../model/provider.model';
import { slugify } from '../../helpers/slugify';
import { Crud } from '../../classes/Crud.class';


export const createProvider  = async (req: Request, res:Response): Promise<Response> => {
    req.body.slug = slugify(req.body.company);
    const data: IProvider = req.body;
    const provider = new Crud(Provider).create(data);
    try {
        await provider.save();
        return res.status(200).json({
            msg: 'operation successfully'
        })
    } catch (error) {
        return res.status(412).json({
            error
        })
    }
}

export const getProvider = async (req: Request, res:Response): Promise<Response> => {
    try {
        if(req.params.slug === undefined){
            const providers = await new Crud(Provider).searchAll();
            return res.status(200).json(providers)
        }else{
            const slug = slugify(req.params.slug);
            const provider = await new Crud(Provider).searchOne('slug', slug);
            if(provider != null){
                return res.status(200).json(provider)
            }else{
                return res.status(200).json({
                    msg: 'provider not found'
                })
            }
        }
    } catch (error) {
        return res.status(412).json({
            error
        })
    }
}

export const deleteProvider = async (req: Request, res:Response): Promise<Response> => {
    try {
        const slug = slugify(req.params.slug);
        const deleted = await new Crud(Provider).deleteResource('slug', slug);
        if(deleted != null){
            return res.status(200).json({
                msg: 'this provider has been deleted successfully'
            })
        }else{
            return res.status(404).json({
                msg: 'provider not found'
            })
        }
    } catch (error) {
        return res.status(412).json({
            error
        })
    }
}

export const updateProvider = async (req: Request, res:Response): Promise<Response> => {
    try {
        const slug = slugify(req.params.slug);
        const updated = await new Crud(Provider).updateResource(req.body, 'slug', slug);
        if(updated != null){
            return res.status(200).json({
                msg: 'this provider has been updated successfully'
            })
        }else{
            return res.status(404).json({
                msg: 'provider not found'
            })
        }
    } catch (error) {
        return res.status(412).json({
            error
        })
    }
}
