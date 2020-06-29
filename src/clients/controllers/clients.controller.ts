import { Request, Response } from 'express';
import Client, { IClient } from '../models/client.model';
import { Search } from '../../classes/search';
import { Create } from '../../classes/create';

export const RegisterClient = async (req: Request, res: Response): Promise<Response> => {
  const data: IClient = req.body;
  try {
    const client = await new Create(data, Client).create();
    await client.save();
    return res.status(200).json({
      msg: 'operation successfully'
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

export const searchClient = async (req: Request, res: Response) => {
  const DNI = parseInt(req.params.dni);
  try {
    const client = await new Search(Client, 'DNI', DNI).searchOne();
    return res.status(200).json(client)
  } catch (error) {
    return res.status(412).json({
      error
    })
  }
};