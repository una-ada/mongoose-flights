/**
 * @file Loads maps for Flights.
 * @author Una
 * @version 2021.06.15
 */

/** Loads maps for Flights. */
class FlightMap {
  /**
   * Loads a map for a Flight.
   * @param {string} mapId Id of the element to render the map into.
   * @param {Object} flight Flight
   */
  constructor(mapId, flight) {
    /*----- Leaflet Setup ----------------------------------------------------*/
    this.map = L.map(mapId, {
      dragging: false,
      scrollWheelZoom: false,
      zoomControl: false,
      zoomSnap: 0.25,
    }).fitBounds([
      [50, -125],
      [25, -65],
    ]);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> ' +
        'contributors',
    }).addTo(this.map);
    /*----- Route Setup ------------------------------------------------------*/
    this.flight = flight;
    // Sorting the destinations is handled in controller :)
    this.route = flight.destinations.map(d => [d.airport, d.arrival]);
    this.route.unshift([flight.airport, flight.departs]);
    console.log(this.route);
    this.route.forEach((v, i) =>
      i < this.route.length - 1 && new L.Geodesic([
        FlightMap.airports[this.route[i][0]],
        FlightMap.airports[this.route[i + 1][0]],
      ]).addTo(this.map));
  }

  /*----- Constants ----------------------------------------------------------*/
  /** @const {Object} airports Information about airports. */
  static airports = {
    ATL: [33.6367, -84.4281],
    DFW: [32.8969, -97.0381],
    DEN: [39.8617, -104.6731],
    LAX: [33.9425, -118.4081],
    SAN: [32.7336, -117.1897],
  };
}
