/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from 'react-bootstrap/Container';
import {useRouter} from 'next/router'

import GuitarHooks from "../hooks/GuitarHooks";
import Image from "next/image";

function Avatar() {
    return <Image src="/modgreensandimas.jpg" alt="me" width="64" height="64"/>
}

export default function Details() {

    const router = useRouter()


    const {
        query: {id}
    } = router;

    const {

        getGuitarDetails,

    } = GuitarHooks();

    const specsOfGuitarSelected = getGuitarDetails({id});

    return (
        <div>
            <Container className="p-0">
                <Header/>

                <div>
                    <Link href="/">
                        <a className="back-to-home">Back to Home</a>
                    </Link>

                </div>
                <div className={styles.layout}>
                    <div>
                        <Image className={styles.picture} src={`/${specsOfGuitarSelected.image}`}
                               alt={specsOfGuitarSelected.name} width="64" height="64"/>

                    </div>
                    <div>
                        <div className={styles.name}>{specsOfGuitarSelected.name}</div>
                        <table>
                            <tbody>
                            <details>
                                <summary className="gtr-details" style={{cursor:"pointer"}}>Details</summary>
                                {specsOfGuitarSelected.specs.map((spec) => (
                                    <tr key={spec}>
                                        <td>
                                            {spec}
                                        </td>
                                    </tr>
                                ))}
                            </details>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
            </Container>
        </div>
    );

}
