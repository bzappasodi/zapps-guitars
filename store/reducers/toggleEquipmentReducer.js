import initialState from '../../initialState';
import * as actionTypes from "../actions/actionTypes";

const equipmentSelected = initialState;

const toggleEquipmentReducer = (state = equipmentSelected, action) => {
    switch (action.type) {
        case actionTypes.EQUIPMENT_INVENTORY_ACTION_TYPE.ADD_EQUIPMENT_INVENTORY_TO_STATE:
            return{
                ...state,
                equipmentSelected: action.equipmentSelected,
            };
        default:
            return state;
    }

}

export default toggleEquipmentReducer;
