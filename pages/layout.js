import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";

import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className={openSans.className}>
          <Header />
          <h3 className="gtr-title">Zapp&apos;s Equipment Inventory</h3>
          <main>{children}</main>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
