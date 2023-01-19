import '../styles/globals.scss'
import {wrapper} from '../configureStore'  ;
import React from "react";
import Layout from './layout'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>);
}

export default wrapper.withRedux(MyApp);
