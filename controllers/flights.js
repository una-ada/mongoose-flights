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
const index = (req, res) =>
  Flight.find({}, (err, flights) =>
    err
      ? console.error(err) || res.createError(500)
      : console.log(flights) || res.send('Test') // change to res.render
  );

/*----- Exports --------------------------------------------------------------*/
module.exports = {
  index,
};
