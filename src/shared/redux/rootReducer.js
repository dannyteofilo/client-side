import { combineReducers } from 'redux';
import login from 'components/login/redux/reducer';
import species from 'modules/species/redux/reducer';
import pokemons from 'modules/pokemons/redux/reducer';



const reducer = combineReducers({
    login:login,
    species:species,
    pokemons:pokemons
})

export default reducer;