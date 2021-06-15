/**
 * Flights destinations controller.
 * @author Una
 * @version 2021.06.14
 * @module controllers/destinations
 */

/*----- Imports --------------------------------------------------------------*/
import Flight from '../models/flight.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Add a new destination to a Flight.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  create: (req, res) =>
    Flight.findById(req.params.id, (err, flight) =>
      err
        ? console.error(err) || res.createError(500)
        : flight.destinations.push(req.body) &&
          flight.save(err =>
            err
              ? console.error(err) || res.createError(500)
              : res.redirect(`/flights/${flight._id}`)
          )
    ),
  /**
   * Remove a destination from a Flight.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  delete: (req, res) =>
    Flight.findById(req.params.id, (err, flight) =>
      err ? console.error(err) || res.createError(500) : res.send('TEST')
    ),
};
