import { Request, Response } from 'express';
import Client, { IClient } from '../models/client.model';
import { Crud } from '../../classes/Crud.class';

export const RegisterClient = async (req: Request, res: Response): Promise<Response> => {
  const data: IClient = req.body;
  try {
    const client = await new Crud(Client).create(data);
    await client.save();
    return res.status(200).json({
      msg: 'operation successfully'
    });
  } catch (error) {
    return res.status(412).json({
      error
    });
  }
};

export const searchClient = async (req: Request, res: Response): Promise<Response> => {
  try {
    const DNI = parseInt(req.params.dni);
    const client = await new Crud(Client).searchOne('DNI', DNI);
    if (client != null) {
      return res.status(200).json(client);
    } else {
      return res.status(404).json({
        msg: 'client not found'
      });
    }
  } catch (error) {
    return res.status(412).json({
      error
    });
  }
};

export const deleteClient = async (req: Request, res: Response): Promise<Response> => {
  try {
    const DNI = parseInt(req.params.dni);
    const deleted = await new Crud(Client).deleteResource('DNI', DNI);
    if (deleted != null) {
      return res.status(200).json({
        msg: 'this client has been deleted successfully'
      });
    } else {
      return res.status(404).json({
        msg: 'client not found'
      });
    }
  } catch (error) {
    return res.status(412).json({
      error
    });
  }
};
export const updateClient = async (req: Request, res: Response): Promise<Response> => {
  try {
    const DNI = parseInt(req.params.dni);
    const updated = await new Crud(Client).updateResource(req.body, 'DNI', DNI);
    if (updated != null) {
      return res.status(200).json({
        msg: 'this client has been updated successfully'
      });
    } else {
      return res.status(404).json({
        msg: 'client not found'
      });
    }
  } catch (error) {
    return res.status(412).json({
      error
    });
  }
};
