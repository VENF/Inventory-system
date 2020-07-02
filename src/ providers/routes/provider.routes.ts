import { Router } from 'express';
import { createProvider, getProvider, deleteProvider, updateProvider} from '../controllers/provider.controllers'
const routes = Router();

routes.route('/provider/:slug?')
    .post(createProvider)
    .get(getProvider)
    .delete(deleteProvider)
    .put(updateProvider)


export default routes;