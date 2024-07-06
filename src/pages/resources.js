import React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import PageContent from "../Components/PageContent";
import Footer from "../Components/Footer";

const ResourcesPage = () => {
  return (
    <>
      <Head />
      <Header />
      <PageContent
        title="Resources"
        intro="On this page is a collation of all the useful resources that have contributed to improvement from all areas"
      />
      <Footer />
    </>
  );
};

export default ResourcesPage;
