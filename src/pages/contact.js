import * as React from "react";
import Head from "../Components/Head";
import Breadcrumb from "../Components/Breadcrumb";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const ContactPage = () => {
  const breadcrumbItems = [
    {
      text: "Home",
      url: `${__PATH_PREFIX__}/`,
    },
    {
      text: "Contact",
      url: `${__PATH_PREFIX__}/contact`,
    },
  ];

  return (
    <>
      <Head title="Contact" />
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbItems} />
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
