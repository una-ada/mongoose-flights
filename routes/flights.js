/**
 * Flights router.
 * @author Una
 * @version 2021.06.12
 * @module routes/flights
 * @see module:controllers/flights
 * @see module:model/flight
 */

/*----- Imports --------------------------------------------------------------*/
import {Router} from 'express';
import flightsCtrl from '../controllers/flights.js';

/*----- Routes ---------------------------------------------------------------*/
const router = Router();
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);

/*----- Exports --------------------------------------------------------------*/
export default router;
