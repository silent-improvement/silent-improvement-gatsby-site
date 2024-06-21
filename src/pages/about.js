import * as React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const AboutPage = () => {
    return (
        <>
            <Head />
            <Header />
            <AboutContent />
            <Footer />
        </>
    )
}

export default AboutPage;

