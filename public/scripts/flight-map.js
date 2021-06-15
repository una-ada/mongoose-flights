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
    this.map = L.map(mapId).setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' +
        '{accessToken}',
      {
        attribution: `Map data &copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 
          contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoidW5hLWFkYSIsImEiOiJja3B4cWZtcXMwNjE4Mm5wY3BjeXJxcjNtIn0' +
          '.Vl3sZxSYq961toGIY7jJSA',
      }
    ).addTo(this.map);
  }
}
