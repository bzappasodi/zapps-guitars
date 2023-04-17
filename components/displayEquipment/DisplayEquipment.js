import React from "react";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

// display either amps or guitars
const DisplayEquipment = ({ equipment }) => {
  return (
    <Link href={`/details/${equipment.id}`}>
      <MDBCard key={equipment.id} className={styles.card}>
        <Image
          src={`/inventory/${equipment.image}`}
          alt={equipment.name}
          width={272}
          height={595}
        />

        <MDBCardBody>
          <MDBCardText>
            <div>
              {equipment.year} {equipment.name}
            </div>
          </MDBCardText>
          <MDBCardText>
            <div className={styles.bottomContainer}></div>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </Link>
  );
};

export default DisplayEquipment;
