import React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import Breadcrumb from "../Components/Breadcrumb";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

const ResourcesPage = () => {
  const breadcrumbItems = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Resources",
      url: "/resources",
    },
  ];

  return (
    <>
      <Head title="Resources"/>
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbItems} />
      <Content
        title="Resources"
        intro="On this page is a collation of all the useful resources that have contributed to improvement from all areas"
      />
      <Footer />
    </>
  );
};

export default ResourcesPage;
