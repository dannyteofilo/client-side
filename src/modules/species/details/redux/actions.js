import * as actions from 'shared/redux/constants';

export const starts = () => {
    return {
        type: actions.DETAIL_REQUEST_STARTS,
        payload: {
            requesting: true,
        }
    }
}

export const ends = () => {
    return {
        type: actions.DETAIL_REQUEST_ENDS,
        payload: {
            requesting: true,
        }
    }
}

export const fails = (error) => {
    return {
        type: actions.DETAIL_REQUEST_FAILED,
        payload: error
    }
}

export const success = (response) => {
    return {
        type: actions.DETAIL_REQUEST_SUCCESS,
        payload: response
    }
}

export const fetch = (data) => {
    return {
        type: actions.DETAIL_PERFORM_FETCH,
        payload:data
    }
}

export const reset = () => {
    return {
        type: actions.DETAIL_RESET_STATE
    }
}