import {
  RequestPlanetsDatabase,
  ReceivePlanetsDatabaseSucess,
  ReceivePlanetsDatabaseFailure
} from '../actions/APIFetching';

const InitialState = {
  isFetching: false,
};

const planetsData = (state = InitialState, action) => {
  console.log('received action:', action);
  switch (action.type) {
    case RequestPlanetsDatabase:
      return {
        ...state,
        isFetching: true,
      };
    case ReceivePlanetsDatabaseSucess:
      return {
        ...state,
        isFetching: false,
        data: action.PlanetsData,
      };
    case ReceivePlanetsDatabaseFailure:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsData;
