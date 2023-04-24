import React from "react";
import { Card } from "react-bootstrap";

import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

// display either amps or guitars
const DisplayEquipment = ({ equipment }) => {
  return (
    <Link href={`/details/${equipment.id}`}>
      <Card key={equipment.id} className={styles.card}>
        <Image
          src={`/inventory/${equipment.image}`}
          alt={equipment.name}
          width={272}
          height={595}
        />
        <Card.Body>
          <Card.Text>
            <span className={styles.displayImage}>
              {equipment.year} {equipment.name}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DisplayEquipment;
