export const FilterPlanets = 'FilterPlanets';

const filterPlanets = (text) => ({
  type: FilterPlanets,
  text,
});

export default filterPlanets;
