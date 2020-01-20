const STARWARS_API = 'https://swapi.co/api/planets/';

const getStarWarsPlanets = () => (
  fetch(`${STARWARS_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarWarsPlanets;
