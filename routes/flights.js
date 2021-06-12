/**
 * Flights router.
 * @author Una
 * @version 2021.06.12
 * @module routes/flights
 */

/*----- Imports --------------------------------------------------------------*/
const express = require('express'),
  router = express.Router();

/*----- Routes ---------------------------------------------------------------*/
router.get('/', (req, res) => res.send('TEST'));

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
