/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.scss";
import {useRouter} from 'next/router'
import GuitarHooks from "../../components/hooks/GuitarHooks";
import Image from "next/image";


function Avatar() {
    return <Image src="/modgreensandimas.jpg" alt="me" width="64" height="64"/>
}

export default function Details() {

    const router = useRouter()

    const {id} = router.query;

    if (!id) return null;

    const {
        getGuitarDetails,
        getAmpDetails,
        radioButtonSelection,
    } = GuitarHooks();

    let specsOfEquipmentSelected = getGuitarDetails({id});

    if(radioButtonSelection === 'amps') {
        specsOfEquipmentSelected = getAmpDetails({id});
    }
    return (
        <>
            <div className={styles.layout}>
                <div>
                    <Image className={styles.picture} src={`/${specsOfEquipmentSelected.image}`}
                           layout="fixed" alt={specsOfEquipmentSelected.name} width="64" height="64"/>

                </div>
                <div>
                    <div className={styles.name}>{specsOfEquipmentSelected.year} {specsOfEquipmentSelected.name}</div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        {specsOfEquipmentSelected.specs.map((spec) => (
                            <tr key={spec}>
                                <td>
                                    {spec}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <Link className="mt-4" href="/">
                        Back to main page<>&#8594;</>
                    </Link>
                </div>
            </div>

        </>
    );

}
