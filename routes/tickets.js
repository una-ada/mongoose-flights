/**
 * Flights tickets router.
 * @author Una
 * @version 2021.06.14
 * @module routes/tickets
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import ticketsCtrl from '../controllers/tickets.js';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router.post('/flights/:id/tickets', ticketsCtrl.create);

/*----- Exports --------------------------------------------------------------*/
export default router;
