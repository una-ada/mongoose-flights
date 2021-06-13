/**
 * Flights destinations router.
 * @author Una
 * @version 2021.06.12
 * @module routes/destinations
 */

/*----- Imports --------------------------------------------------------------*/
import {Router} from 'express';
import destinationsCtrl from '../controllers/destinations.js';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router.post('/flights/:id/destinations', destinationsCtrl.create);

/*----- Exports --------------------------------------------------------------*/
export default router;
