import { fork, all } from 'redux-saga/effects';
import login from 'components/login/redux/saga';
import speciesList from 'modules/species/redux/saga.js'


export default function * rootSaga() {
    yield all([
        fork(login),
        fork(speciesList)
    ]);
}