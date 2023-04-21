import { call, all, put, takeEvery } from "redux-saga/effects";
import React from "react";
import * as constants from "../../../constants";
import * as api from "../../../api/equipmentInventoryService";
import * as actionTypes from "../../actions/actionTypes";

export function* watchEquipmentInventoryDisplay() {
  yield takeEvery(
    constants.types.EQUIPMENT_INVENTORY_DISPLAY,
    executeEquipmentInventoryDisplay
  );
}

export function populateEquipmentInventoryResultsToState(equipments) {
  return {
    type: actionTypes.EQUIPMENT_INVENTORY_ACTION_TYPE
      .ADD_EQUIPMENT_INVENTORY_TO_STATE,
    equipments: equipments,
  };
}

export function setIsCheckedToggleEquipment(equipmentSelected) {
  return {
    type: actionTypes.EQUIPMENT_INVENTORY_ACTION_TYPE
      .ADD_EQUIPMENT_INVENTORY_TO_STATE,
    equipmentSelected: equipmentSelected,
  };
}

export function* executeEquipmentInventoryDisplay() {
  let equipment = yield call(api.getEquipment);
  yield put(populateEquipmentInventoryResultsToState(equipment));
}

export default function* sagas() {
  return yield all([watchEquipmentInventoryDisplay()]);
}
