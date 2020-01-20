export const SW_BASE_API = 'http://swapi.co/api/';

export const getPlanets = () => (
  fetch(`${SW_BASE_API}/planets`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
