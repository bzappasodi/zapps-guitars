import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Container from "react-bootstrap/Container";

import React from "react";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Container className={openSans.className}>
        <h3 className="gtr-title">Zapp&apos;s Equipment Inventory</h3>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
