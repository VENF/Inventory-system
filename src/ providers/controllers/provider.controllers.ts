import { Request, Response } from 'express';
import Provider, { IProvider } from '../model/provider.model';
import { slugify } from '../../helpers/slugify';
import { Search } from '../../classes/search';
import { Create } from '../../classes/create';


export const createProvider  = async (req: Request, res:Response): Promise<Response> => {
    req.body.slug = slugify(req.body.company);
    const data: IProvider = req.body;
    const provider = new Create(data, Provider).create();
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

export const searchProvider  = async (req: Request, res:Response): Promise<Response> => {
    if(req.params.slug != undefined){
        req.params.slug = slugify(req.params.slug)
        const provider = await new Search(Provider, 'slug',req.params.slug ).searchOne();
        return res.status(200).json(provider)
    }else{
        const providers = await new Search(Provider).searchAll();
        return res.status(200).json(providers)
    }
}