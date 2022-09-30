import {createSelector, createSelectorCreator} from 'reselect';

export const getGuitarInventoryState = () => createSelector(
    (state) => state.guitarsReducer.guitars,
    (guitars) => guitars
)


export const getGuitarSpecsById = () => createSelector(
    (state) => state.guitarsReducer.guitars.id,
    (id) => id,
)
