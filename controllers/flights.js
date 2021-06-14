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
import Ticket from '../models/ticket.js';

/*----- Constants ------------------------------------------------------------*/
const longAirports = {
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
    // Get the flight by id
    Flight.findById(req.params.id, (err, flight) =>
      err
        ? // Error handling for finding Flight
          console.error(err) || res.createError(500)
        : // Get all Tickets for this flight
          Ticket.find({ flight: flight._id }, (err, tickets) =>
            err
              ? // Error handling for finding tickets
                console.error(err) || res.createError(500)
              : // Logging tickets to console for development
                console.log(tickets) ||
                // Pass flight and tickets into the show view
                res.render('flights/show', { flight, tickets, longAirports })
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
