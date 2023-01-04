import React, {useEffect} from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText} from "mdb-react-ui-kit";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import Button from "@mui/material/Button";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const DisplayGuitars = ({guitars}) => {
    return (
        <MDBCard key={guitars.id} className={styles.card} >
            <MDBCardImage src={`https://zappsguitars.s3.amazonaws.com/${guitars.image}`} position='top'
                          alt={guitars.name}/>
            <MDBCardBody>
                <MDBCardText>{guitars.year} {guitars.name}
                </MDBCardText>
                <div className={styles.bottomContainer}>
                    <Link href={`/guitars/${guitars.id}`}>
                        <Button variant="contained" color="primary" className={styles.detailsbtn}>Details</Button>
                    </Link>
                </div>

            </MDBCardBody>
        </MDBCard>);
};

export default DisplayGuitars;
