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
        <div role="heading" aria-level="3">
            <Image
                src={myEquipment}
                width={800}
                height={600}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Equipment"
            />
        </div>
    </>
  );
}

export default Header;
