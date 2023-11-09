import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";
import { Col, Row } from "react-bootstrap";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment";
import ToggleEquipment from "../components/toggleEquipment/ToggleEquipment";
import * as equipmentInventorySaga from "../store/sagas/equipmentInventory/equipmentInventorySaga";
// const renderEquipment = () => {
//   const equipment = radioButtonSelection === "amps"? amps : guitars;
//   return equipment.map((item) => (
//       <div key={item.id}  >
//         <DisplayEquipment equipment={item} />
//       </div>
//   ));
// };

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
  }, [dispatch, guitars]);

  const renderEquipment = (equipment) => (
    <Row>
      {equipment?.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
          <div>
            <DisplayEquipment equipment={item} />
          </div>
        </Col>
      )) || null}
    </Row>
  );

  return (
    <>
      <ToggleEquipment
        toggleEquipmentSelection={toggleEquipmentSelection}
        radioButtonSelection={radioButtonSelection}
      />

      {radioButtonSelection === "amps"
        ? renderEquipment(amps)
        : renderEquipment(guitars)}
    </>
  );
}
