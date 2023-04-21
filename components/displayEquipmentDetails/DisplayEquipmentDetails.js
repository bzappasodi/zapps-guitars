import React from "react";
import styles from "../../styles/Details.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
// display either amps or guitars
const DisplayEquipmentDetails = ({ specsOfEquipmentSelected }) => {
  return (
    <div>
      <Head>
        <title>
          {specsOfEquipmentSelected.year} {specsOfEquipmentSelected.name}
        </title>
      </Head>
      <Container>
        {specsOfEquipmentSelected && (
          <>
            <h1>
              {" "}
              {specsOfEquipmentSelected.year} {specsOfEquipmentSelected.name}
            </h1>
            <Row>
              <Col lg={4} md={6} xs={6}>
                <Image
                  src={`/inventory/${specsOfEquipmentSelected.image}`}
                  width={272}
                  height={595}
                  alt={specsOfEquipmentSelected.name}
                  className={styles.detailsImage}
                />
                <br />
                <Link className="mt-4" href="/">
                  Inventory list page <>&#8594;</>
                </Link>
              </Col>
              <Col lg={8} md={6} xs={6}>
                {specsOfEquipmentSelected.specs.map((spec) => (
                  <Row key={spec}>
                    <Col xs={10}>
                      <li>{spec}</li>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default DisplayEquipmentDetails;
