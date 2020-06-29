import { Router } from 'express';
import { RegisterClient, searchClient } from '../controllers/clients.controller';
const routes = Router();

routes.route('/client/:dni?')
  .post(RegisterClient)
  .get(searchClient)

export default routes;
