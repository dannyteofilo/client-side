import Http from 'support/Http';

class SpecieService {

    list() {
        return Http.get('https://pokeapi.co/api/v2/evolution-trigger/1/');
    }

    details(url) {
        return Http.get(url);
    }

}

const service = new SpecieService();

export default service;