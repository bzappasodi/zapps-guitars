import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import styles from "../../styles/Home.module.scss";
import ToggleEquipmentHooks from "../hooks/ToggleEquipmentHooks";
import {useDispatch} from "react-redux";
import * as equipmentInventorySaga from "../../store/sagas/equipmentInventory/equipmentInventorySaga";

function ToggleEquipment() {
    const {
        radioButtonSelection
    } = ToggleEquipmentHooks()

    const dispatch = useDispatch();

    return (
        <Form className={styles.toggleEquipment}>
            <div key={`inline-checkbox`} className="mb-3">
                <Form.Check
                    inline
                    label="Amps"
                    name="equipment-view"
                    value='amps'
                     checked={radioButtonSelection === "amps"}
                    onChange={(e) => dispatch(equipmentInventorySaga.setIsCheckedToggleEquipment(e.target.value))}
                    type={'radio'}

                />
                <Form.Check
                    inline
                    label="Guitars"
                    type={'radio'}
                    value='guitars'
                    checked={radioButtonSelection === "guitars"}
                    name="equipment-view"
                    onChange={(e) => dispatch(equipmentInventorySaga.setIsCheckedToggleEquipment(e.target.value))}
                />
            </div>
        </Form>
    );
}

export default ToggleEquipment;
