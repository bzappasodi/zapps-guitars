import {call, all, put, takeEvery} from 'redux-saga/effects';
import React from "react";
import * as constants from '../../constants';
import * as api from '../../../api/guitarInventoryService';
import * as actionTypes from '../../actions/actionTypes';

export function performGuitarInventoryDisplay() {
    return {
        type: constants.types.GUITAR_INVENTORY_DISPLAY,
    }

}

export function* watchGuitarInventoryDisplay() {
    yield takeEvery(constants.types.GUITAR_INVENTORY_DISPLAY, executeGuitarInventoryDisplay)
}



export function populateGuitarInventoryResultsToState(guitars) {
    return {
        type: actionTypes.GUITAR_INVENTORY_ACTION_TYPE.ADD_GUITAR_INVENTORY_TO_STATE,
        guitars:guitars,
    }
}

export function* executeGuitarInventoryDisplay() {
    let guitars = yield call(api.getGuitars)
    yield put(populateGuitarInventoryResultsToState(guitars))
}

export default function* sagas() {
    return yield all(
        [watchGuitarInventoryDisplay()],
    )
}

