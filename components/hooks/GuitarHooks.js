import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  getGuitarInventoryState,
  getAmplifierInventoryState,
  getToggleEquipmentChecked,
} from "../../store/selectors/selectors";

function GuitarHooks() {
  const getGuitars = useMemo(getGuitarInventoryState, []);
  const guitars = useSelector((state) => getGuitars(state));

  const getRadioButtonSelection = useMemo(getToggleEquipmentChecked, []);

  const radioButtonSelection = useSelector((state) =>
    getRadioButtonSelection(state)
  );

  const getAmplifiers = useMemo(getAmplifierInventoryState, []);
  const amps = useSelector((state) => getAmplifiers(state));

  return {
    guitars,
    radioButtonSelection,
    amps,
  };
}

export default GuitarHooks;
