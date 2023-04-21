import { call, all, select, takeEvery } from "redux-saga/effects";
import React from "react";
import * as constants from "../../../constants";

export function performEquipmentDisplay(id) {
  executeEquipmentDetailsDisplay(id);

  return {
    type: constants.types.EQUIPMENT_DETAILS_DISPLAY,
    selectedEquipmentId: id,
  };
}

export function* watchEquipmentDetailsDisplay() {
  yield takeEvery(
    constants.types.EQUIPMENT_DETAILS_DISPLAY,
    executeEquipmentDetailsDisplay
  );
}

export function* executeEquipmentDetailsDisplay(id) {
  return yield select(
    (state) => state.guitarsReducer.guitars[id.selectedEquipmentId - 1]
  );
}

export default function* sagas() {
  return yield all([watchEquipmentDetailsDisplay()]);
}
