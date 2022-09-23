/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from 'react-bootstrap/Container';

// TODO either axios or fetch
export async function getStaticPaths() {
    const resp = await fetch('https://zappsguitars.s3.amazonaws.com/guitars.json');
    const guitars = await resp.json();

    return {
        paths: guitars.map((guitars) => ({
            params: {id: guitars.id.toString()},
        })), fallback: false,
    };
}


export async function getStaticProps({params}) {
    const resp = await fetch(`https://zappsguitars.s3.amazonaws.com/${params.id}.json`);

    return {
        props: {
            guitars: await resp.json(),
        }, // revalidate: 30,
    };


}


export default function Details({guitars}) {
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
                src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`}
                alt={guitars.name}
            />
        </div>
        <div>
            <div className={styles.name}>{guitars.name}</div>
            <div className={styles.type}> {guitars.type}</div>
            <table>
                <thead className={styles.header}>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {guitars.stats.map(({name, value}) => (<tr key={name}>
                    <td className={styles.attribute}>{name}</td>
                    <td>{value}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    </div>
    <Footer/>
        </Container>
   </div>
);

}
