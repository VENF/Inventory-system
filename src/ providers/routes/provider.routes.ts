import { Router } from 'express';
import { createProvider ,searchProvider} from '../controllers/provider.controllers'
const routes = Router();

routes.route('/provider/:slug?')
    .post(createProvider)
    .get(searchProvider)

export default routes;