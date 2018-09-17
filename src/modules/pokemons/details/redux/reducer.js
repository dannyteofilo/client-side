import * as actions from "shared/redux/constants";

const initialState = {
  requesting: false,
  error: null,
  data: null
};

const reducer = (state = initialState, action) => {
  let newState = null;

  switch (action.type) {
    case actions.DETAIL_REQUEST_STARTS_POKEMON:
      newState = {
        ...state,
        requesting: true,
        error: false
      };
      break;

    case actions.DETAIL_REQUEST_SUCCESS_POKEMON:
      newState = {
        ...state,
        data: action.payload
      };
      break;

    case actions.DETAIL_REQUEST_FAILED_POKEMON:
      newState = {
        ...state,
        ...action.payload
      };
      break;

    case actions.DETAIL_REQUEST_ENDS_POKEMON:
      newState = {
        ...state,
        requesting: false
      };
      break;

    case actions.DETAIL_RESET_STATE_POKEMON:
      newState = {
        ...state,
        requesting: false,
        error: null
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
};

export default reducer;
