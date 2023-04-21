import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment";
import ToggleEquipment from "../components/toggleEquipment/ToggleEquipment";
import * as equipmentInventorySaga from "../store/sagas/equipmentInventory/equipmentInventorySaga";

// TODO add search box functionality, make responsive fix layout component, restrict radio buttons
export async function getServerSideProps(context) {
  // comes in as serverside props
  const resp = await fetch("https://zappsguitars.s3.amazonaws.com/guitars.json");
  return {
    props: {
      guitars: await resp.json(),
    },
  };
}
export default function Home({guitars}) {
  const {radioButtonSelection, amps,  } = GuitarHooks();
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
                <DisplayEquipment equipment={guitars} key={guitars.id} />
              ))
            : null}
        </div>
      )}
    </>
  );
}
