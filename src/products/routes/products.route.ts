import { Router } from 'express';
import { createProduct } from '../controllers/products.controller';
const routes = Router();

routes.route('/products').post(createProduct);

export default routes;
