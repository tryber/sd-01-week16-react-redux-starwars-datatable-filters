const STARWARS_API = 'https://swapi.co/api/planets/';

export const getStarWarsPlanets = () => {
  return(
  fetch(`${STARWARS_API}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
)};
