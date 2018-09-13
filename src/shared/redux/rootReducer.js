import { combineReducers } from 'redux';
import login from 'components/login/redux/reducer';
import speciesList from 'modules/species/redux/reducer'



const reducer = combineReducers({
    login:login,
    species:speciesList
})

export default reducer;