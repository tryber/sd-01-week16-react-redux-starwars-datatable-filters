const endpoint = 'https://swapi.co/api/planets/';

export const getPlanetFetch = () => {
  fetch(`${endpoint}`).then((response) => response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
};

export default getPlanetFetch;
