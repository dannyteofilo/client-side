import { fork, all } from 'redux-saga/effects';
import login from 'components/login/redux/saga';
import speciesList from 'modules/species/list/redux/saga'
import speciesDetails from 'modules/species/details/redux/saga';


export default function * rootSaga() {
    yield all([
        fork(login),
        fork(speciesList),
        fork(speciesDetails)
    ]);
}