import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/Home.module.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ToggleEquipment({ radioButtonSelection, toggleEquipmentSelection }) {
  return (
    <Form className={styles.toggleEquipment}>
      <Row>
        <Col className="pt-1">
          <Form.Check
            inline
            label="Amps"
            name="equipment-view"
            value="amps"
            checked={radioButtonSelection === "amps"}
            onChange={(e) => toggleEquipmentSelection(e)}
            type={"radio"}
          />
        </Col>
        <Col className="pt-1">
          <Form.Check
            inline
            label="Guitars"
            type={"radio"}
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
