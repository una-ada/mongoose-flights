/**
 * Flights destinations controller.
 * @author Una
 * @version 2021.06.12
 * @module controllers/destinations
 */

/*----- Imports --------------------------------------------------------------*/
import Flight from '../models/flight.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Add a new destination to a Flight.
   * @param {mongoose.Request} req
   * @param {mongoose.Response} res
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
};
