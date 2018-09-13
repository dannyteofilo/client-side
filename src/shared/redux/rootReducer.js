import { combineReducers } from 'redux';
import login from 'components/login/redux/reducer';
import species from 'modules/species/redux/reducer'



const reducer = combineReducers({
    login:login,
    species:species
})

export default reducer;