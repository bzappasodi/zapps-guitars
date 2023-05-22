import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment";
import ToggleEquipment from "../components/toggleEquipment/ToggleEquipment";
import * as equipmentInventorySaga from "../store/sagas/equipmentInventory/equipmentInventorySaga";
import { Col } from "react-bootstrap";

//
export async function getServerSideProps() {
  // comes in as serverside props
  const resp = await fetch(
    "https://zappsguitars.s3.amazonaws.com/guitars.json"
  );
  return {
    props: {
      guitars: await resp.json(),
    },
  };
}
export default function Home({ guitars }) {
  const { radioButtonSelection, amps } = GuitarHooks();
  const dispatch = useDispatch();

  const toggleEquipmentSelection = (e) => {
    dispatch(
      equipmentInventorySaga.setIsCheckedToggleEquipment(e.target.value)
    );
  };

  useEffect(() => {
    const fetchEquipment = () => {
      dispatch(amplifierInventorySaga.performAmplifierInventoryDisplay());
    };
    fetchEquipment();
  }, [dispatch]);

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
