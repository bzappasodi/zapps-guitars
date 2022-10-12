import initialState from '../initialState';
import * as actionTypes from "../actions/actionTypes";

const guitarState = initialState.guitars;
const guitarsReducer = (state = guitarState, action) => {
    switch (action.type) {
        case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.ADD_GUITAR_INVENTORY_TO_STATE:
            return{
                ...state,
                guitars: action.guitars,
            };
        case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.IS_API_DONE_LOADING:
            return{
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }

}

export default guitarsReducer;
