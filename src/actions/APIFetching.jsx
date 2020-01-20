import StarWarsPlanetsFetch from '../services/APIRequest';

export const RequestPlanetsDatabase = 'RequestPlanetsDatabase';
export const ReceivePlanetsDatabaseSucess = 'ReceivePlanetsDatabaseSucess';
export const ReceivePlanetsDatabaseFailure = 'ReceivePlanetsDatabaseFailure';

const RequestPlanets = () => ({
  type: RequestPlanetsDatabase,
});

const RequestPlanetsSucess = (PlanetsData) => ({
  type: ReceivePlanetsDatabaseSucess,
  PlanetsData,
});

const RequestPlanetsFailure = (error) => ({
  type: ReceivePlanetsDatabaseFailure,
  error,
});

function fetchPlanets() {
  return (dispatch) => {
    dispatch(RequestPlanets());
    return StarWarsPlanetsFetch()
      .then(
        (PlanetsData) => dispatch(RequestPlanetsSucess(PlanetsData)),
        (error) => dispatch(RequestPlanetsFailure(error.message)),
      );
  };
}

export default fetchPlanets;
