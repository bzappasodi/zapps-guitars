import {call, all, put, takeEvery} from 'redux-saga/effects';
import React from "react";
import * as constants from '../../../constants';
import * as api from '../../../pages/api/equipmentInventoryService';
import * as actionTypes from '../../actions/actionTypes';
import {EQUIPMENT_INVENTORY_ACTION_TYPE} from "../../actions/actionTypes";

export function performEquipmentInventoryDisplay() {
    return {
        type: constants.types.EQUIPMENT_INVENTORY_DISPLAY,
    }

}

export function* watchEquipmentInventoryDisplay() {
    yield takeEvery(constants.types.EQUIPMENT_INVENTORY_DISPLAY, executeEquipmentInventoryDisplay)
}

export function isApiLoading(isLoading){
    return {
        type: constants.types.API_IS_LOADING,
        isLoading:isLoading,
    }
}


export function populateEquipmentInventoryResultsToState(equipments) {
    return {
        type: actionTypes.EQUIPMENT_INVENTORY_ACTION_TYPE.ADD_EQUIPMENT_INVENTORY_TO_STATE,
        equipments:equipments,
    }
}

export function setIsCheckedToggleEquipment(equipmentSelected) {
    return {
        type: actionTypes.EQUIPMENT_INVENTORY_ACTION_TYPE.ADD_EQUIPMENT_INVENTORY_TO_STATE,
        equipmentSelected: equipmentSelected,
    }
}

export function* executeEquipmentInventoryDisplay() {

    let equipment = yield call(api.getEquipment);
    yield put(populateEquipmentInventoryResultsToState(equipment))
}

export default function* sagas() {
    return yield all(
        [watchEquipmentInventoryDisplay()],
    )
}

