/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from "react";
import Link from "next/link";
import Header from "../pages/header/Header";
import styles from "../styles/Home.module.css";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "./store/sagas/guitarInventory/guitarInventorySaga";
import Footer from "../pages/footer/Footer";
import {Container, Col, Row} from 'react-bootstrap';
import GuitarHooks from "./hooks/GuitarHooks";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default function Home() {
    const {
        guitars, loading, setLoading
    } = GuitarHooks();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(guitarInventorySaga.performGuitarInventoryDisplay());
        setLoading(true)

    }, []);

    return (
        <div>

            <picture>
                <source style={{minWidth:"650px"}} srcSet="/my-equipment.jpg"/>
                <source style={{minWidth:"465px"}} srcSet="/my-equipment.jpg"/>
                <img src="/my-equipment.jpg" alt="Zapp's Guitars" style={{width:"100%"}} />
            </picture>

            <Container className="p-0">
                <Header/>
                <ReactPlaceholder type='media' rows={7} ready={loading}>
                <Row>
                    <Col>
                        <div className={styles.container}>

                            <div className={styles.grid}>
                                {guitars ? guitars.map((guitars) => (
                                    <div className={styles.card} key={guitars.id}>
                                        <Link href={`/guitars/${guitars.id}`}>
                                            <a>
                                                <img
                                                    src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`}
                                                    alt={guitars.name}
                                                />
                                                <h3>{guitars.year} {guitars.name}</h3>
                                            </a>
                                        </Link>
                                    </div>
                                )): null}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
                </ReactPlaceholder>
            </Container>
        </div>

    );
}
