/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [guitars, setGuitars] = useState([]);
    useEffect(() => {
        async function getGuitars() {
            const resp = await fetch(
                "https://zappsguitars.s3.amazonaws.com/guitars.json"
            );
            setGuitars(await resp.json());
        }
        getGuitars();
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Zapp's Guitar Inventory</title>
            </Head>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>Zapp's Guitar Inventory</h2>
            <div className={styles.grid}>
                {Array.isArray(guitars)
                    ? guitars.map((guitars) => (
                    <div className={styles.card} key={guitars.id}>
                        <Link href={`/guitars/${guitars.id}`}>
                            <a>
                                <img
                                    src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`}
                                    alt={guitars.name}
                                />
                                <h3>{guitars.name}</h3>
                            </a>
                        </Link>
                    </div>
                    )) : null}
            </div>
        </div>
    );
}
