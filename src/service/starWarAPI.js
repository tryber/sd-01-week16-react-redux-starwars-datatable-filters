const endPoint = 'https://swapi.co/api/planets/';

const getPlanetFetch = () => fetch(`${endPoint}`).then((response) => response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default getPlanetFetch;
