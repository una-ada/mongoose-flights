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

  /*----- Constants ----------------------------------------------------------*/
  /** @const {Object} airports Information about airports. */
  static airports = {
    ATL: {
      city: 'Atlanta, GA',
      coords: [33.6367, -84.4281],
      name: 'Hartsfield-Jackson Atlanta',
    },
    DFW: {
      city: 'Dallas, TX',
      coords: [32.8969, -97.0381],
      name: 'Dallas/Fort Worth',
    },
    DEN: {
      city: 'Denver, CO',
      coords: [39.8617, -104.6731],
      name: 'Denver',
    },
    LAX: {
      city: 'Los Angeles, CA',
      coords: [33.9425, -118.4081],
      name: 'Los Angeles',
    },
    SAN: {
      city: 'San Diego, CA',
      coords: [32.7336, -117.1897],
      name: 'San Diego',
    },
  };
}
