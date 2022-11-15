/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Container from 'react-bootstrap/Container';
import {useRouter} from 'next/router'

import GuitarHooks from "../../components/hooks/GuitarHooks";
import Image from "next/image";
import Button from "@mui/material/Button";

function Avatar() {
    return <Image src="/modgreensandimas.jpg" alt="me" width="64" height="64"/>
}

export default function Details() {

    const router = useRouter()
    // const {
    //     query: {id}
    // } = router;
    const {id} = router.query;

    if (!id) return null;

    const {
        getGuitarDetails,
    } = GuitarHooks();

    const specsOfGuitarSelected = getGuitarDetails({id});

    return (
        <div>
            <Container className="p-0">
                <Header/>


                <div className={styles.layout}>
                    <div>
                        <Image className={styles.picture} src={`/${specsOfGuitarSelected.image}`}
                               layout="fixed" alt={specsOfGuitarSelected.name} width="64" height="64"/>

                    </div>
                    <div>
                        <div className={styles.name}>{specsOfGuitarSelected.name}</div>
                        <table>
                            <tbody>
                            <details>
                                <summary className="gtr-details"
                                         style={{cursor: "pointer", textDecoration: "underline"}}>Details
                                </summary>
                                {specsOfGuitarSelected.specs.map((spec) => (
                                    <tr key={spec}>
                                        <td>
                                            {spec}
                                        </td>
                                    </tr>
                                ))}
                            </details>
                            <div>


                            </div>
                            </tbody>
                        </table>
                        <Link href="/">
                            <Button variant="contained" color="primary">Main Page</Button>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </Container>
        </div>
    );

}
