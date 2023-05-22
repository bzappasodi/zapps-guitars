import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";
import { Col } from "react-bootstrap";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment";
import ToggleEquipment from "../components/toggleEquipment/ToggleEquipment";
import * as equipmentInventorySaga from "../store/sagas/equipmentInventory/equipmentInventorySaga";

// TODO add search box functionality, make responsive fix layout component, restrict radio buttons

export default function Home() {
  const { guitars, amps, radioButtonSelection } = GuitarHooks();
  const dispatch = useDispatch();

  const toggleEquipmentSelection = (e) => {
    dispatch(
      equipmentInventorySaga.setIsCheckedToggleEquipment(e.target.value)
    );
  };

  useEffect(() => {
    const fetchEquipment = () => {
      dispatch(guitarInventorySaga.performGuitarInventoryDisplay());
      dispatch(amplifierInventorySaga.performAmplifierInventoryDisplay());
    };
    if (!guitars) {
      fetchEquipment();
    }
  }, [dispatch, guitars, amps]);

  const renderEquipment = (equipment) => {
    if (!equipment) return null;
    return equipment.map((item) => (
      <Col xs={12} key={item.id}>
        <DisplayEquipment equipment={item} />
      </Col>
    ));
  };

  return (
    <>
      <ToggleEquipment
        toggleEquipmentSelection={toggleEquipmentSelection}
        radioButtonSelection={radioButtonSelection}
      />

      <div className={styles.grid}>
        {radioButtonSelection === "amps"
          ? renderEquipment(amps)
          : renderEquipment(guitars)}
      </div>
    </>
  );
}
