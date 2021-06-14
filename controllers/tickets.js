/**
 * Flights tickets controller.
 * @author Una
 * @version 2021.06.14
 * @module controllers/tickets
 */

/*----- Imports --------------------------------------------------------------*/
import Flight from '../models/flight.js';
import Ticket from '../models/ticket.js';

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Add a new ticket to a Flight.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  create: (req, res) =>
    Flight.findById(req.params.id, (err, flight) =>
      err
      ? console.error(err) || res.createError(500)
      : res.send('Test')
    ),
};
