import * as React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const ContactPage = () => {
  return (
    <>
      <Head title="Contact" />
      <Header />
      <PageContent
        title="Contact Silent Improvement"
        intro="To contact us directly please send an email to the address provided:"
        email="silent.improvement.official@gmail.com"
        button="Back to Home Page"
        url={`${__PATH_PREFIX__}/`}
        buttonClass={<i class="fa-solid fa-arrow-turn-up"></i>}
      />
      <Footer />
    </>
  );
};

export default ContactPage;
