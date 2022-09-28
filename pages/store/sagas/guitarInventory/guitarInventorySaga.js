import {call, all, takeEvery} from 'redux-saga/effects';
import React from "react";
import * as constants from '../../constants';
import * as api from '../../../api/guitarInventoryService';

export function performGuitarInventoryDisplay() {
    return {
        type: constants.types.GUITAR_INVENTORY_DISPLAY,
    }

}

export function* watchGuitarInventoryDisplay(){
    yield takeEvery(constants.types.GUITAR_INVENTORY_DISPLAY, executeGuitarInventoryDisplay)
}

export function* executeGuitarInventoryDisplay(){
    let guitars = yield call(api.getGuitars)
}

export default function* sagas(){
    return yield all(
        [watchGuitarInventoryDisplay()],
    )
}

