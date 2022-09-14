/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Header from "../pages/header/Header";
import styles from "../styles/Home.module.css";
import bgimage from '../public/my-equipment.jpg'


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
        <div>
            <Header/>
            {/*<img src={bgimage} alt="Logo" />*/}
            <img className="jumbotron" src="/my-equipment.jpg" alt="image" width="100%"/>

                <div className={styles.container}>

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2>Zapp's Guitar Inventory</h2>
                    <div className={styles.grid}>
                        {guitars.map((guitars) => (
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
                        ))}
                    </div>
                </div>
        </div>

);
}
