import React, {useEffect} from "react";
import styles from "../../styles/Home.module.scss";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "../../store/sagas/guitarInventory/guitarInventorySaga";
import DisplayEquipment from "../../components/displayEquipment/DisplayEquipment"
import ToggleEquipment from "../../components/toggleEquipment/ToggleEquipment";

// TODO add search box, add checkbox to toggle between amps and guitars, make responsive
function Home() {
    const {
        guitars
    } = AmpHooks();

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAmps = () => {
            dispatch(guitarInventorySaga.performAmpInventoryDisplay());
        }
        fetchAmps();
    }, [dispatch]);

    return (
        <>
            <ToggleEquipment/>
            <div className={styles.grid}>
                {/* eslint-disable-next-line react/jsx-key */}
                {amps ? amps.map(guitars => <DisplayEquipment amps={amps}/>) : null}
            </div>
        </>
    );
}

export default Home;
