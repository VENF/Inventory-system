import { Router } from 'express';
import { registerSale, getSales } from '../controllers/sales.controller';
const router = Router();

router.route('/sales/:date1?/:date2?')
    .post(registerSale)
    .get(getSales)

export default router;