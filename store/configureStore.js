import { applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { legacy_createStore as createStore } from "redux";
import guitarsReducer from "./reducers/guitarsReducer";
import ampsReducer from "./reducers/ampsReducer";
import toggleEquipmentReducer from "./reducers/toggleEquipmentReducer";
import equipmentDetailsReducer from "./reducers/equipmentDetailsReducer";
import rootSaga from "./sagas/rootSaga";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  guitarsReducer,
  ampsReducer,
  toggleEquipmentReducer,
  equipmentDetailsReducer,
});

const logger = createLogger();

export const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, thunk];

  middleware.push(logger);
  // 2: Add an extra parameter for applying middleware
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
