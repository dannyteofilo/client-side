import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import Pokemons from '../../PokemomService/index';
import * as list from './actions';
import * as actions from 'shared/redux/constants';

function* performFetch(action) {

    try {
        yield put(list.starts());

        const response = yield call(Pokemons.list);
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
    yield takeLatest(actions.SPECIES_PERFORM_FETCH_POKEMON, performFetch);
}