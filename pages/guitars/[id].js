/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.scss";

import {useRouter} from 'next/router'

import GuitarHooks from "../../components/hooks/GuitarHooks";
import Image from "next/image";
import Button from "@mui/material/Button";

function Avatar() {
    return <Image src="/modgreensandimas.jpg" alt="me" width="64" height="64"/>
}

export default function Details() {

    const router = useRouter()

    const {id} = router.query;

    if (!id) return null;

    const {
        getGuitarDetails,
    } = GuitarHooks();

    const specsOfGuitarSelected = getGuitarDetails({id});

    return (
        <>
            <div className={styles.layout}>
                <div>
                    <Image className={styles.picture} src={`/${specsOfGuitarSelected.image}`}
                           layout="fixed" alt={specsOfGuitarSelected.name} width="64" height="64"/>

                </div>
                <div>
                    <div className={styles.name}>{specsOfGuitarSelected.year} {specsOfGuitarSelected.name}</div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        {specsOfGuitarSelected.specs.map((spec) => (
                            <tr key={spec}>
                                <td>
                                    {spec}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Link className="mt-4" href="/">
                        <Button variant="contained" color="primary">Back to Main Page</Button>
                    </Link>
                </div>
            </div>

        </>
    );

}
