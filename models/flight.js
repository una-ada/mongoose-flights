/**
 * Flight model
 * @author Una
 * @version 2021.06.12
 * @module models/flight
 * @see module:routes/flights
 * @see module:model/flight
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*------- Schema -------------------------------------------------------------*/
const destinationSchema = new mongoose.Schema({
    airport: {
      type: String,
      enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
  }),
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
      destinations: [destinationSchema],
    },
    { timestamps: true }
  );

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Flight', flightSchema);
