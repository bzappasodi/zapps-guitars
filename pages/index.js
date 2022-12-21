import React, {useEffect} from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import GuitarHooks from "../components/hooks/GuitarHooks";
import Button from "@mui/material/Button";

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

    const displayGuitars = (guitars) => {
        return (
            <MDBCard key={guitars.id}>
                <MDBCardImage src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`} position='top'
                              alt={guitars.name}/>
                <MDBCardBody>
                    <MDBCardText>{guitars.year} {guitars.name}
                    </MDBCardText>
                    <div className={styles.bottomContainer}>
                        <Link href={`/guitars/${guitars.id}`}>
                            <Button variant="contained" color="primary" className={styles.detailsbtn}>Details
                                Page</Button>
                        </Link>
                    </div>

                </MDBCardBody>
            </MDBCard>);
    };
    return (
        <div className={styles.grid}>
            {guitars ? guitars.map(guitars => displayGuitars(guitars)) : null}
        </div>
    );
}

export default Home;
