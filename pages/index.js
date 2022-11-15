import React, {useEffect} from "react";
import Link from "next/link";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.scss";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "../store/sagas/guitarInventory/guitarInventorySaga";
import Footer from "../components/footer/Footer";
import {Container} from 'react-bootstrap';
import profilePic from '../public/my-equipment.jpg';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import GuitarHooks from "../components/hooks/GuitarHooks";

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
            <MDBCard key={guitars.id} className={styles.card}>
                <MDBCardImage src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`} position='top'
                              alt={guitars.name}/>
                <MDBCardBody>
                    <MDBCardTitle>{guitars.year} {guitars.name}</MDBCardTitle>
                    <MDBCardText>
                    </MDBCardText>
                    <Link href={`/guitars/${guitars.id}`}>
                        Details Page
                    </Link>
                </MDBCardBody>
            </MDBCard>);
    };
    return (
        <>
            <picture>
                <source style={{minWidth: "650px"}} srcSet="/my-equipment.jpg"/>
                <source style={{minWidth: "465px"}} srcSet="/my-equipment.jpg"/>
                <img src={profilePic} alt="Zapp's Guitars" style={{width: "100%"}}/>
            </picture>

            <Container className="p-0">

                <Header/>
                <div className={styles.grid}>
                    {guitars ? guitars.map(guitars => displayGuitars(guitars)) : null};
                </div>
                <Footer/>
            </Container>
        </>

    );
}

export default Home;
