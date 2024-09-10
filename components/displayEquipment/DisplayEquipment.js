import React from "react";
import { Card } from "react-bootstrap";

import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import GuitarHooks from "../hooks/GuitarHooks";


const DisplayEquipment = ({ equipment }) => {
  const { radioButtonSelection } = GuitarHooks();
  return (
    <Link href={`/details/${equipment.id}`}>
      <Card key={equipment.id} className={styles.card}>
        <Image
          src={`/inventory/${equipment.image}`}
          alt={radioButtonSelection}
          width={0}
          height={0}
          sizes="100vw"
          quality={75}
          layout="responsive"
          className={
            radioButtonSelection === "amps"
              ? styles.contentImgAmp
              : styles.contentImgGtr
          }
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
