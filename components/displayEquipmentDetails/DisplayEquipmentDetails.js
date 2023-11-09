import React from "react";
import styles from "../../styles/Details.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Head from "next/head";
import { Row, Col, Container } from "react-bootstrap";
import GuitarHooks from "../hooks/GuitarHooks";
// display either amps or guitars
const DisplayEquipmentDetails = ({ specsOfEquipmentSelected }) => {
  const { radioButtonSelection } = GuitarHooks();
  const { image, name, year, specs } = specsOfEquipmentSelected;
  const height = radioButtonSelection === "amps" ? 212 : 595;

  return (
    <div>
      <Head>
        <title>
          {year} {name}
        </title>
      </Head>
      <Container>
        {specsOfEquipmentSelected && (
          <Row>
            <Col xs={12} lg={4}>
              <Image
                src={`/inventory/${image}`}
                width={272}
                height={height}
                alt={name}
                className={styles.detailsImage}
              />
              <br />
              <Link href="/">Inventory list page &#8594;</Link>
            </Col>
            <Col xs={12} lg={8}>
              <h3>
                {year} {name}
              </h3>
              <ul>
                {specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default DisplayEquipmentDetails;
