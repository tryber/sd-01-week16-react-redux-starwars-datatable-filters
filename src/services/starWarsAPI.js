const STAR_WARS_API = 'https://swapi.co/api/planets/';

const getStarWarsPlanets = () => (
  fetch(STAR_WARS_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarWarsPlanets;
