import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/products.controller';
const routes = Router();

routes.route('/products/:field?/:value?')
    .post(createProduct)
    .get(getProducts)

export default routes;
