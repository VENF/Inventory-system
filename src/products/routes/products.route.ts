import { Router } from 'express';
import { createProduct, getProducts, deleteProduct } from '../controllers/products.controller';
const routes = Router();

routes.route('/products/:field?/:value?')
    .post(createProduct)
    .get(getProducts)
    
routes.route('/products/:code')
    .delete(deleteProduct)
export default routes;
