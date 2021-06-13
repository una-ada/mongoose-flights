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
    console.log(req.query.sort) ||
    Flight.find(
      {},
      null,
      // Sort based on query
      { sort: { [req.query.sort || '_id']: req.query.descending ? -1 : 1 } },
      (err, flights) =>
        err
          ? console.error(err) || res.createError(500)
          : res.render('flights/index', { req, flights })
    ),
  /**
   * Render details for a single flight.
   * @param {mongoose.Request} req
   * @param {mongoose.Response} res
   */
  show: (req, res) =>
    Flight.findById(req.params.id, (err, flight) =>
      res.render('flights/show', { flight })
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
  /**
   * Add new flight to flights db.
   * @param {mongoose.Request} req
   * @param {mongoose.Response} res
   */
  create: (req, res) =>
    Flight.create(req.body, err =>
      err
        ? console.error(err) || res.createError(500)
        : res.redirect('/flights')
    ),
};
