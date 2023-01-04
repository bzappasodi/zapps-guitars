import React, {useEffect} from "react";
    import styles from "../styles/Home.module.scss";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import GuitarHooks from "../components/hooks/GuitarHooks";
import DisplayGuitars from "../components/displayGuitars/DisplayGuitars"

function Home() {
    const {
        guitars
    } = GuitarHooks();

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchGuitars = () => {
            dispatch(guitarInventorySaga.performGuitarInventoryDisplay());
        }
        fetchGuitars();
    }, [dispatch]);

    return (
        <div className={styles.grid}>
            {/* eslint-disable-next-line react/jsx-key */}
            {guitars ? guitars.map(guitars => <DisplayGuitars guitars={guitars} />) : null}
        </div>
    );
}

export default Home;
