import { PLANET_OF_STAR_WAR } from '../actions';

const allPlanetWar = (state = {}, action) => {
  switch (action.type) {
    case PLANET_OF_STAR_WAR:
      return {
        ...state,
        name: action.name,
        rotation_period: action.rotation_period,
        orbital_period: action.orital_period,
        diameter: action.diameter,
        climate: action.climate,
        gravity: action.gravity,
        terrain: action.terrain,
        surface_water: action.surface_water,
        population: action.population,
      };
    default:
      return state;
  }
};

export default allPlanetWar;
