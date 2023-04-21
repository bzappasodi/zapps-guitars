import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  getGuitarInventoryState,
  getAmplifierInventoryState,
  getToggleEquipmentChecked,
} from "../../store/selectors/selectors";

function EquipmentDetailsHooks() {
  const getGuitars = useMemo(getGuitarInventoryState, []);
  const guitarsSelected = useSelector((state) => getGuitars(state));

  const getAmplifiers = useMemo(getAmplifierInventoryState, []);
  const ampSelected = useSelector((state) => getAmplifiers(state));

  const getRadioButtonSelection = useMemo(getToggleEquipmentChecked, []);
  const radioButtonSelection = useSelector((state) =>
    getRadioButtonSelection(state)
  );
  // const equipmentSelected = (state) => state.guitarsReducer.guitars[1];
  // console.log("equipmentSelected " + equipmentSelected);

  const getEquipmentSelectedSpecs = (id, getRadioButtonSelection) => {
    let specsOfEquipmentSelected = guitarsSelected[id - 1];

    if (getRadioButtonSelection === "amps") {
      specsOfEquipmentSelected = ampSelected[id - 1];
    }

    return specsOfEquipmentSelected;
  };

  return {
    radioButtonSelection,
    getEquipmentSelectedSpecs,
  };
}

export default EquipmentDetailsHooks;
