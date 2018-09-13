import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import Species from '../services/SpeciesService';
import * as list from './actions';
import * as actions from 'shared/redux/constants';

function* performFetch(action) {

    try {
        yield put(list.starts());

        const response = yield call(Species.list);
        console.log('object',response);
        yield put(list.success(response.data));
    } catch (error) {
        yield put(list.fails({
            error
        }));
    } finally {
        yield put(list.ends());
    }
}

export default function* watchFetch() {
    yield takeLatest(actions.SPECIES_PERFORM_FETCH, performFetch);
}