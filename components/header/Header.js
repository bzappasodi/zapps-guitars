import React from 'react';
import Head from "next/head";

function Header() {
    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Zapp's Guitar Inventory</title>
            </Head>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3 className="gtr-title">Zapp's Guitar Inventory</h3>
        </>
    );
}

export default Header;
