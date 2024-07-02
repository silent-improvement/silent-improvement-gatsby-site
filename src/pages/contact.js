import * as React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import PageContent from "../Components/PageContent";
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
      />
      <Footer />
    </>
  );
};

export default ContactPage;
