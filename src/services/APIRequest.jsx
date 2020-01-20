const StarWarsBaseAPI = 'https://swapi.co/api/planets';

const StarWarsPlanetsFetch = async () => {
    const response = await fetch(StarWarsBaseAPI);
    return response.json();
};

export default StarWarsPlanetsFetch;
