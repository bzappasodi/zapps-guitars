import { all } from "redux-saga/effects";

import guitarInventorySaga from "./guitarInventory/guitarInventorySaga";
import amplifierInventorySaga from "./amplifierInventory/ampliferInventorySaga";
export default function* rootSaga() {
  yield all([
    guitarInventorySaga(),
    amplifierInventorySaga(),
  ]);
}
