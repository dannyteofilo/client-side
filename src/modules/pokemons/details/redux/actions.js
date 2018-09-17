import * as actions from 'shared/redux/constants';

export const starts = () => {
    return {
        type: actions.DETAIL_REQUEST_STARTS_POKEMON,
        payload: {
            requesting: true,
        }
    }
}

export const ends = () => {
    return {
        type: actions.DETAIL_REQUEST_ENDS_POKEMON,
        payload: {
            requesting: true,
        }
    }
}

export const fails = (error) => {
    return {
        type: actions.DETAIL_REQUEST_FAILED_POKEMON,
        payload: error
    }
}

export const success = (response) => {
    return {
        type: actions.DETAIL_REQUEST_SUCCESS_POKEMON,
        payload: response
    }
}

export const fetch = (data) => {
    return {
        type: actions.DETAIL_PERFORM_FETCH_POKEMON,
        payload:data
    }
}

export const reset = () => {
    return {
        type: actions.DETAIL_RESET_STATE_POKEMON
    }
}