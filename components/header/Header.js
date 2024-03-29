import React from "react";
import Head from "next/head";
import Image from "next/image";
import myEquipment from "../../public/my-equipment.jpg";
function Header() {
  return (
    <>
      <Head>
        <title>Zapp&apos;s Equipment Inventory</title>
      </Head>
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      >
        <Image
          src={myEquipment}
          alt="my equip"
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
          sizes={"100vw"}
          quality={75}
        />
      </div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
    </>
  );
}

export default Header;
