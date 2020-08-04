import { Request, Response } from 'express';
import Products from '../../products/model/products.model';
import { Crud } from '../../classes/Crud.class';
import { Product } from '../../classes/product.class';
import Sale from '../model/sales.model';
import { SalesC } from '../../classes/Sales.class';

export const registerSale = async (req: Request, res: Response): Promise<Response> => {
    const data: TSales = req.body;
    const sale = new Crud(Sale).create(data);
    try {
        for (let i = 0; i < sale.list.length; i++) {
            const product = await Products.findOne({code: sale.list[i].code});

            let setCnt: any | undefined = product?.quantity;

            sale.list[i].type = product?.type;
            sale.list[i].size = product?.size;
            sale.list[i].brand = product?.brand;
            sale.list[i].price = product?.price;
            
            setCnt -= sale.list[i].cnt;

            if(setCnt === 0){

               const remove = await new Product().deleteProduct(sale.list[i].code);

            }else{
                const up = await Products.updateOne({code: sale.list[i].code}, {quantity: setCnt });
            }
        }
        await sale.save();
        return res.status(200).json({
            msg: 'operation successfully'
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}  


export const getSales = async (req: Request, res: Response) => {
    let response: Array<TSales | []>;
    try {
        const result = await new SalesC().abstract(req.params.date1, req.params.date2);
        response = result;
        return res.status(200).json({
            response
        }); 
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}