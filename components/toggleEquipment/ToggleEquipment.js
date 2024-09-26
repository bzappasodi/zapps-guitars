import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/Home.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RadioButton from "../RadioButton/RadioButton";

function ToggleEquipment({ radioButtonSelection, toggleEquipmentSelection }) {
  return (
    <Form className={styles.toggleEquipment}>
      <Row>
        <Col className="pt-1">
          <RadioButton
            label="Amps"
            name="equipment-view"
            value="amps"
            ariaLabel="Amps"
            checked={radioButtonSelection === "amps"}
            onChange={(e) => toggleEquipmentSelection(e)}
          />
        </Col>
        <Col className="pt-1">
          <RadioButton
            label="Guitars"
            ariaLabel="Guitars"
            value="guitars"
            checked={radioButtonSelection === "guitars"}
            name="equipment-view"
            onChange={(e) => toggleEquipmentSelection(e)}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default ToggleEquipment;
