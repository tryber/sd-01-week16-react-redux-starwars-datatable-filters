const SW_BASE_API = 'https://swapi.co/api/planets/';

const getPlanets = () => (
  fetch(SW_BASE_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanets;
