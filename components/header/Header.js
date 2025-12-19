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
                alt="my equip"
                placeholder="blur"
                style={{objectFit: "cover"}}
                sizes={"100vw"}
                quality={75}
                width={329}
                height={205}
                layout="responsive"
                className="rounded-md"
            />
        </div>
    </>
  );
}

export default Header;
