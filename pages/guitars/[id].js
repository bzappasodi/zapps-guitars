/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from 'react-bootstrap/Container';
import useRouter from 'next/router';
import guitarHooks from "../hooks/guitarHooks";

export default function Details() {
    const {
        query: {id}
    } = useRouter;

    const {

        getGuitarDetails,

    } = guitarHooks();

    const specsOfGuitarSelected = getGuitarDetails({id});

    return (
        <div>
            <Container className="p-0">
                <Header/>

                <div>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>

                </div>
                <div className={styles.layout}>
                    <div>
                        <img
                            className={styles.picture}
                            src={`https://zappsguitars.s3.amazonaws.com/${specsOfGuitarSelected.image}`}
                            alt={specsOfGuitarSelected.name}
                        />
                    </div>
                    <div>
                        <div className={styles.name}>{specsOfGuitarSelected.name}</div>
                        <table>
                            <tbody>
                            {specsOfGuitarSelected.specs.map((spec) => (
                                <tr key={spec}>
                                    <td>
                                        {spec}
                                    </td>
                                </tr>
                                // <div key={spec}>
                                //     {spec}
                                // </div>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
            </Container>
        </div>
    );

}
