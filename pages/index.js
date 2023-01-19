import React, {useEffect} from "react";
import styles from "../styles/Home.module.scss";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import * as amplifierInventorySaga from "../store/sagas/amplifierInventory/ampliferInventorySaga";

import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayEquipment from "../components/displayEquipment/DisplayEquipment"

// TODO add search box functionality, make responsive add layout make a new component

export default function Home() {
    const {
        guitars,
        amps,
        radioButtonSelection
    } = GuitarHooks();

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchEquipment = () => {
            dispatch(guitarInventorySaga.performGuitarInventoryDisplay());
            dispatch(amplifierInventorySaga.performAmplifierInventoryDisplay());
        }
        fetchEquipment();

    }, [dispatch]);

    return (
        <>
            {radioButtonSelection === 'amps' ?
                <div className={styles.grid}>
                    {amps ? amps.map(amps => <DisplayEquipment equipment={amps} key={amps.id}/>) : null}
                </div>
                :
                <div className={styles.grid}>
                    {guitars ? guitars.map(guitars => <DisplayEquipment equipment={guitars} key={guitars.id}/>) : null}
                </div>
            }
        </>
    );
}
