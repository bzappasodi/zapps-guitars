import '../styles/globals.scss'
import {wrapper} from '../configureStore'  ;
import profilePic from "../public/my-equipment.jpg";
import Header from "../components/header/Header";
import React from "react";
import Footer from "../components/footer/Footer";
import Container from 'react-bootstrap/Container';

function MyApp({Component, pageProps}) {
    return (
        <>
            <picture>
                <source style={{minWidth: "650px"}} srcSet="/my-equipment.jpg"/>
                <source style={{minWidth: "465px"}} srcSet="/my-equipment.jpg"/>
                <img src={profilePic} alt="Zapp's Guitars" style={{width: "100%"}}/>
            </picture>
            <Container className="p-0">
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </Container>
        </>);

}

export default wrapper.withRedux(MyApp);
