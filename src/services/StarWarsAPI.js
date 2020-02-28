export const START_WARS_PLANETS_API = 'https://swapi.co/api/planets/';

const getPlanets = () => (
  fetch(START_WARS_PLANETS_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanets;
