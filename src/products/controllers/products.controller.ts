import { Response, Request } from 'express';
import { Product } from '../../classes/product.class';

export const createProduct = async (req: Request, res: Response) => {
  const data: TProduct = req.body;
  const response = await new Product().create(data);
  try {
    if (response === false) {
      return res.status(412).json({
        msg: 'Provider not found'
      });
    }
    if (response === null) {
      return res.status(412).json({
        msg: 'This product already exist'
      });
    } else {
      await response.save();
      return res.status(200).json({
        msg: 'This product has been aggregated successfully'
      });
    }
  } catch (error) {
    return res.status(412).json({
      error
    });
  }
};
