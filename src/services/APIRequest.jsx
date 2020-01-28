const Star_Wars_Base_URL = 'https://swapi.co/api/planets';

const fetchingPlanets = async () => {
  const response = await fetch(Star_Wars_Base_URL);
  return response.json();
};

export default fetchingPlanets;
