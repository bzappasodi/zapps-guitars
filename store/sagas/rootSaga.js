import {all} from 'redux-saga/effects';

import guitarInventorySaga from "./guitarInventory/guitarInventorySaga";

export default function* rootSaga() {
    yield all([
        guitarInventorySaga(),
    ])
}
