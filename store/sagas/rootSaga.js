import { all } from "redux-saga/effects";

import guitarInventorySaga from "./guitarInventory/guitarInventorySaga";
import amplifierInventorySaga from "./amplifierInventory/ampliferInventorySaga";
import equipmentDetailsSaga from "./equipmentDetails/equipmentDetailsSaga";
export default function* rootSaga() {
  yield all([
    guitarInventorySaga(),
    amplifierInventorySaga(),
    equipmentDetailsSaga(),
  ]);
}
