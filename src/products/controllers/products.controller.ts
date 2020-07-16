import { Response, Request } from 'express';
import { Product } from '../../classes/product.class';

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
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
    return res.status(500).json({
      error
    });
  }
};


export const getProducts = async (req: Request, res: Response): Promise<Response> => {
  try {

    if(req.params.field === undefined || req.params.value === undefined){

      const result = await new Product().searchAll();
      return res.status(200).json(result)

    }else{
      const result = await new Product().searchAllWithparams(req.params.field, req.params.value);
      return res.status(200).json(result)
    }
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}


export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deleted = await new Product().deleteProduct(req.params.code);
    if(deleted != null){
      return res.status(200).json({
        msg: 'this product has been deleted successfully'
      })
    }else{
      return res.status(404).json({
        msg: 'product not found'
      })
    }
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}