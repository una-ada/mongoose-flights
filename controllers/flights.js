/**
 * Flights controller.
 * @author Una
 * @version 2021.06.12
 * @module controllers/flights
 * @see module:routers/flights
 * @see module:models/flight
 */

/*----- Imports --------------------------------------------------------------*/
import Flight from '../models/flight.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
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
  new: (req, res) =>
    res.render('flights/new', {
      departs: new Flight().departs.toISOString().slice(0, 16),
    }),
};
