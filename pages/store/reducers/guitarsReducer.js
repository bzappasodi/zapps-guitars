import initialState from '../initialState';
import * as actionTypes from "../actions/actionTypes";

const guitarState = initialState.guitars;
const guitarsReducer = (state = guitarState, action) => {
    switch (action.type) {
        case actionTypes.GUITAR_INVENTORY_ACTION_TYPE.GUITAR_INVENTORY:
            return{
                ...state,
                id: action.id,
                name: action.name,
                image: action.image,
                year: action.year,
                specs: action.specs
            };
        default:
            return state;
    }

}

export default guitarsReducer;
