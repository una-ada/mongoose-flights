/**
 * Main server script.
 * @author Una
 * @version 2021.06.12
 */

/*----- Imports --------------------------------------------------------------*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import destinationsRouter from './routes/destinations.js';
import flightsRouter from './routes/flights.js';

/*----- Initialize -----------------------------------------------------------*/
// Infill for `__dirname`
// see: https://techsparx.com/nodejs/esnext/dirname-es-modules.html
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  app = express();
import './config/database.js';

/*----- Middleware -----------------------------------------------------------*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*----- Routers --------------------------------------------------------------*/
app.use('/', indexRouter);
app.use('/', destinationsRouter);
app.use('/flights', flightsRouter);

/*----- Error Handling -------------------------------------------------------*/
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/*----- Exports --------------------------------------------------------------*/
export default app;
