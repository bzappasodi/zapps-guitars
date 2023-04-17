import { useMemo } from "react";
import { getToggleEquipmentChecked } from "../../store/selectors/selectors";
import { useSelector } from "react-redux";

function ToggleEquipmentHooks() {
  const getRadioButtonSelection = useMemo(getToggleEquipmentChecked, []);
  const radioButtonSelection = useSelector((state) =>
    getRadioButtonSelection(state)
  );

  return {
    radioButtonSelection,
  };
}

export default ToggleEquipmentHooks;
