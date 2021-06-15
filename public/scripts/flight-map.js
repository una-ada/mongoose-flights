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
   */
  constructor(mapId) {
    this.map = L.map(mapId, {
      dragging: false,
      zoomControl: false,
      zoomSnap: 0.25,
    }).fitBounds([
      [50, -125],
      [25, -65],
    ]);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' +
        'contributors',
    }).addTo(this.map);
  }
}
