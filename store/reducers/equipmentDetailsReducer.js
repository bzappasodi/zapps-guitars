import initialState from "../initialState";
import * as actionTypes from "../actions/actionTypes";

const ampState = initialState.amps;
const equipmentDetailsReducer = (state = ampState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_DETAILS_ACTION_TYPE.DISPLAY_AMPLIFIER_DETAILS:
      return {
        ...state,
        amps: action.amplifiers,
      };
    case actionTypes.DISPLAY_DETAILS_ACTION_TYPE.DISPLAY_GUITAR_DETAILS:
      return {
        ...state,
        amps: action.amplifiers,
      };
    case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.IS_API_DONE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.SET_SELECTED_ID:
      return {
        ...state,
        selectedEquipmentId: action.selectedEquipmentId,
      };
    default:
      return state;
  }
};

export default equipmentDetailsReducer;
