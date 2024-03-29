import { createSelector } from "reselect";

export const getGuitarInventoryState = () =>
  createSelector(
    (state) => state.guitarsReducer.guitars,
    (guitars) => guitars
  );

export const makeSelectEquipmentDetails = () =>
  createSelector(
    (state, props) => state.guitarsReducer.guitars[props.selectedId],
    (guitars) => guitars
  );

// TODO whats up here
export const getIsApiLoading = () =>
  createSelector(
    (state) => state.guitarsReducer.guitars,
    (isApiLoading) => isApiLoading
  );

export const getAmplifierInventoryState = () =>
  createSelector(
    (state) => state.ampsReducer.amps,
    (guitars) => guitars
  );

export const getGuitarSpecsById = () =>
  createSelector(
    (state) => state.guitarsReducer.guitars,
    (id) => id
  );

export const getToggleEquipmentChecked = () =>
  createSelector(
    (state) => state.toggleEquipmentReducer.equipmentSelected,
    (equipmentSelected) => equipmentSelected
  );
