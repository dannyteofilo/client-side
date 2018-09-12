import { fork, all } from 'redux-saga/effects';
import login from 'components/login/redux/saga'


export default function * rootSaga() {
    yield all([
        fork(login)
    ]);
}