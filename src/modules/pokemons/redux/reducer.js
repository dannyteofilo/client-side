import list from './../list/redux/reducer';
import details from '../details/redux/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    list,
    details,
})