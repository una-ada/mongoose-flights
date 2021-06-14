/**
 * Ticket model.
 * @author Una
 * @version 2021.06.14
 * @module models/ticket
 */

/*----- Imports --------------------------------------------------------------*/
import mongoose from 'mongoose';

/*----- Schema ---------------------------------------------------------------*/
const ticketSchema = new mongoose.Schema({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number,
    min: 0,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  }
});

/*----- Exports --------------------------------------------------------------*/
export default mongoose.model('Ticket', ticketSchema);
