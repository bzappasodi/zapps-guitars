/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from "react";
import Link from "next/link";
import Header from "../pages/header/Header";
import styles from "../styles/Home.module.css";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "./store/sagas/guitarInventory/guitarInventorySaga";
import Footer from "../pages/footer/Footer";
import {Container, Col, Row} from 'react-bootstrap';
import guitarHooks from "./hooks/guitarHooks";

export default function Home() {
    const {
        guitars
    } = guitarHooks();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(guitarInventorySaga.performGuitarInventoryDisplay());
    }, []);
    return (
        <div>

            <img className="jumbotron" src="/my-equipment.jpg" alt="image" width="100%"/>
            <Container className="p-0">
                <Header/>

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
            </Container>
        </div>

    );
}
