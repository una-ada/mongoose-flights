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
  constructor(mapId){
    L.map(mapId).setView([51.505, -0.09], 13);
  }
}
