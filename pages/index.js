/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Header from "../pages/header/Header";
import styles from "../styles/Home.module.css";
import {useDispatch} from 'react-redux';
import * as guitarInventorySaga from "./store/sagas/guitarInventory/guitarInventorySaga";
import Footer from "../pages/footer/Footer";
import {Container, Col, Row} from 'react-bootstrap';

export default function Home() {
    const [guitars, setGuitars] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(guitarInventorySaga.performGuitarInventoryDisplay())
        // async function getGuitars() {
        //     const resp = await fetch(
        //         "https://zappsguitars.s3.amazonaws.com/guitars.json"
        //     );
        //
        //     setGuitars(await resp.json());
        // }
        // getGuitars();

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
                                {guitars.map((guitars) => (
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
                                ))}
                            </div>
                        </div>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
