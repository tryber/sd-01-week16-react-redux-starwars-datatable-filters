const StarWarsBaseAPI = 'https://swapi.co/api/planets/';

const StarWarsPlanetsFetch = async () => {
  try {
    const response = await fetch(StarWarsBaseAPI);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  };
};

export default StarWarsPlanetsFetch;
