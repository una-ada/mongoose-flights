/**
 * Flights controller.
 * @author Una
 * @version 2021.06.12
 * @module controllers/flights
 * @see module:routers/flights
 * @see module:models/flight
 */

/*----- Imports --------------------------------------------------------------*/
const Flight = require('../models/flight');

/*----- Methods --------------------------------------------------------------*/
const index = (req, res) => res.send('Test');

/*----- Exports --------------------------------------------------------------*/
module.exports = {
  index,
};
