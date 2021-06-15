/**
 * Flights controller.
 * @author Una
 * @version 2021.06.14
 * @module controllers/flights
 * @see module:routers/flights
 * @see module:models/flight
 */

/*----- Imports --------------------------------------------------------------*/
import Flight from '../models/flight.js';
import Ticket from '../models/ticket.js';

/*----- Constants ------------------------------------------------------------*/
const airports = {
  ATL: 'Hartsfield-Jackson Atlanta (ATL)',
  DFW: 'Dallas/Fort Worth (DFW)',
  DEN: 'Denver (DEN)',
  LAX: 'Los Angeles (LAX)',
  SAN: 'San Diego (SAN)',
};

/*----- Export Methods -------------------------------------------------------*/
export default {
  /**
   * Render flights index page.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  index: (req, res) =>
    console.log(req.query.sort) ||
    Flight.find(
      {}, // Empty Object to find all
      null, // Get all properties of the Flights
      // Sort based on query
      { sort: { [req.query.sort || '_id']: req.query.descending ? -1 : 1 } },
      (err, flights) =>
        err
          ? // Error handling for finding flight
            console.error(err) || res.createError(500)
          : // Pass flights into index view
            res.render('flights/index', { req, flights })
    ),
  /**
   * Render details for a single flight.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  show: (req, res) =>
    Flight.findById(req.params.id, (err, flight) =>
      err
        ? console.error(err) || res.createError(500)
        : Ticket.find({ flight: flight._id }, (err, tickets) =>
            err
              ? console.error(err) || res.createError(500)
              : flight.destinations.sort((a, b) => a.arrival - b.arrival) &&
                res.render('flights/show', { flight, tickets, airports })
          )
    ),
  /**
   * Render new flight form.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  new: (req, res) =>
    // Render new flight view
    res.render('flights/new', {
      // Pass in default departure time formatted for HTML forms
      departs: new Flight().departs.toISOString().slice(0, 16),
    }),
  /**
   * Add new flight to flights db.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  create: (req, res) =>
    // Create new Flight
    Flight.create(req.body, err =>
      err
        ? // Error handling for Flight creations
          console.error(err) || res.createError(500)
        : // Redirect client on success
          res.redirect('/flights')
    ),
};
