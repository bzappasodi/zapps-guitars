import {call, all, put, takeEvery} from 'redux-saga/effects';
import React from "react";
import * as constants from '../../../constants';
import * as api from '../../../pages/api/amplifierInventoryService';
import * as actionTypes from '../../actions/actionTypes';

export function performAmplifierInventoryDisplay() {
    return {
        type: constants.types.AMPLIFIER_INVENTORY_DISPLAY,
    }

}

export function* watchAmplifierInventoryDisplay() {
    yield takeEvery(constants.types.AMPLIFIER_INVENTORY_DISPLAY, executeAmplifierInventoryDisplay)
}

export function isApiLoading(isLoading){
    return {
        type: constants.types.API_IS_LOADING,
        isLoading:isLoading,
    }
}


export function populateAmplifierInventoryResultsToState(amplifiers) {
    return {
        type: actionTypes.AMPLIFIER_INVENTORY_ACTION_TYPE.ADD_AMPLIFIER_INVENTORY_TO_STATE,
        amplifiers:amplifiers,
    }
}

export function* executeAmplifierInventoryDisplay() {

    let Amplifiers = yield call(api.getAmplifiers);
    yield put(populateAmplifierInventoryResultsToState(Amplifiers))
}

export default function* sagas() {
    return yield all(
        [watchAmplifierInventoryDisplay()],
    )
}

