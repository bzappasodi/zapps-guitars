import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";
import { Container, Row, Col, Card } from "react-bootstrap";

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
    if (!guitars){fetchEquipment();}
  }, []);

  return (
    <>
      <ToggleEquipment
        toggleEquipmentSelection={(e) => toggleEquipmentSelection(e)}
        radioButtonSelection={radioButtonSelection}
      />

      {radioButtonSelection === "amps" ? (
        <div className={styles.grid}>
          {amps
            ? amps.map((amps) => (
                <DisplayEquipment equipment={amps} key={amps.id} />
              ))
            : null}
        </div>
      ) : (
        <div className={styles.grid}>
          {guitars
            ? guitars.map((guitars) => (
                  <Col xs={12} key={guitars.id}>
                  <DisplayEquipment equipment={guitars} />
                  </Col>
              ))
            : null}
        </div>
      )}
    </>
  );
}
