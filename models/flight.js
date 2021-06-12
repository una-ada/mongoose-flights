/**
 * Flight model
 * @author Una
 * @version 2021.06.12
 * @module models/flight
 * @see module:routes/flights
 * @see module:model/flight
 */

/*----- Imports --------------------------------------------------------------*/
const mongoose = require('mongoose'),
  /*----- Schema -------------------------------------------------------------*/
  flightSchema = new mongoose.Schema(
    {
      airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United'],
      },
      airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
      },
      flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
      },
      departs: {
        type: Date,
        default: () =>
          // Add a year to a date
          (d => d.setFullYear(d.getFullYear() + 1))(
            // Pass in the current date
            new Date()
          ),
      },
    },
    { timestamps: true }
  );

/*----- Exports --------------------------------------------------------------*/
module.exports = mongoose.model('Flight', flightSchema);
