import { FilterPlanets } from '../actions/FilterContent';
  
  const InitialState = {
    filter: '',
  };
  
  const filterPlanets = (state = InitialState, action) => {
    console.log('received action:', action);
    switch (action.type) {
      case FilterPlanets:
        return {
          ...state,
          filter: action.text,
        };
      default:
        return state;
    }
  };
  
  export default filterPlanets;
  