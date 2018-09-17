import Http from 'support/Http';

class PokemonService {

    list() {
        return Http.get('https://pokeapi.co/api/v2/pokemon/');
    }

    details(url) {
        return Http.get(url);
    }

}

const service = new PokemonService();

export default service;