import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";

const ampState = initialState.amps;
const ampsReducer = (state = ampState, action) => {
  switch (action.type) {
    case actionTypes.AMPLIFIER_INVENTORY_ACTION_TYPE
      .ADD_AMPLIFIER_INVENTORY_TO_STATE:
      return {
        ...state,
        amps: action.amplifiers,
      };
    case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.IS_API_DONE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default ampsReducer;
