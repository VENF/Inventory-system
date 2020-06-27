import { Router } from 'express';
import { RegisterClient, searchClient, deleteClient, updateClient  } from '../controllers/clients.controller';
const routes = Router();

routes.route('/client/:DNI?')
    .post(RegisterClient)
    .get(searchClient)
    .delete(deleteClient)
    .put(updateClient)

export default routes;