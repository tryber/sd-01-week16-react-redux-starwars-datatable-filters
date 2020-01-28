const StarWarsBaseURL = 'https://swapi.co/api/planets';

const fetchingPlanets = async () => {
  const response = await fetch(StarWarsBaseURL);
  return response.json();
};

export default fetchingPlanets;
