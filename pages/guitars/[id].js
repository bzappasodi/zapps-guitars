/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import styles from "../../styles/Details.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Container from 'react-bootstrap/Container';
import useRouter from 'next/router';

export default function Details() {
    const {
        query: {id}
    } = useRouter;
    const [guitars, setGuitars] = useState(null);
    useEffect(() => {
        async function getGuitars() {
            const resp = await fetch(
                "https://zappsguitars.s3.amazonaws.com/guitars.json"
            );

            setGuitars(await resp.json());
        }

        if (id) {
            getGuitars();
        }

    }, [id]);

    if (!guitars) {
        return null;
    }

    console.log("ID " + JSON.stringify({query: id}))



    return (<div>

       hello { guitars.forEach((item) =>{

            console.log(" ITEM " + item.id)

    })}
    </div>);


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
                    {id}
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
                            {
                                guitars.map((value, key) =>
                                    <div>{key}{value}</div>
                                )
                            }
                            {/*{guitars.specs.map(({name, value}) => (<tr key={name}>*/}
                            {/*    <td className={styles.attribute}>{name}</td>*/}
                            {/*    <td>{value}</td>*/}
                            {/*</tr>))}*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer/>
            </Container>
        </div>
    );

}
