import { combineReducers } from 'redux';
import login from 'components/login/redux/reducer'



const reducer = combineReducers({
    login:login
})

export default reducer;