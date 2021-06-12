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

/*----- Export Methods -------------------------------------------------------*/
module.exports = {
  /**
   * Render flights index page.
   * @param {mongoose.Request} req
   * @param {mongoose.Response} res
   */
  index: (req, res) =>
    Flight.find({}, (err, flights) =>
      err
        ? console.error(err) || res.createError(500)
        : res.render('flights/index', { flights })
    ),
  /**
   * Render new flight form.
   * @param {mongoose.Request} req
   * @param {mongoose.Response} res
   */
  new: (req, res) => res.send('Test'),
};
