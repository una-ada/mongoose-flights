/**
 * Flights router.
 * @author Una
 * @version 2021.06.12
 * @module routes/flights
 * @see module:controllers/flights
 * @see module:model/flight
 */

/*----- Imports --------------------------------------------------------------*/
const express = require('express'),
  router = express.Router(),
  flightsCtrl = require('../controllers/flights');

/*----- Routes ---------------------------------------------------------------*/
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
