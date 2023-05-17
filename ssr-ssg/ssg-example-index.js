import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";
import { Col } from "react-bootstrap";
import guitars from "../json/guitars.json";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment";
import ToggleEquipment from "../components/toggleEquipment/ToggleEquipment";
import * as equipmentInventorySaga from "../store/sagas/equipmentInventory/equipmentInventorySaga";

/// List of all the paths that should be rendered
export async function getStaticPaths() {
  const response = await fetch(
    "https://zappsguitars.s3.amazonaws.com/guitars.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  //creating an array of objects
  const paths = data.map((guitars) => {
    return {
      params: { id: `${guitars.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

// same as server side props
export async function getStaticProps(context) {
  return {
    props: {
      guitars: data, //slice method has been removed
    },
  };
}

export default function Home({ data }) {
  console.log("data " + data);
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