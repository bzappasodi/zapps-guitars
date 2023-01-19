import React from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText} from "mdb-react-ui-kit";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// display either amps or guitars
const DisplayEquipment = ({equipment}) => {
    return (
        <MDBCard key={equipment.id} className={styles.card} >
            <MDBCardImage src={`https://zappsguitars.s3.amazonaws.com/${equipment.image}`} position='top'
                          alt={equipment.name}/>
            <MDBCardBody>
                <MDBCardText>{equipment.year} {equipment.name}
                </MDBCardText>
                <div className={styles.bottomContainer}>
                    <Link href={`/details/${equipment.id}`}>
                        Details<>&#8594;</>
                    </Link>

                </div>

            </MDBCardBody>
        </MDBCard>);
};

export default DisplayEquipment;
