const SWAPI = 'https://swapi.co/api/planets/';

const getDataAPI = () => (
  fetch(SWAPI)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getDataAPI;
