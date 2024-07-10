import * as React from "react";
import Head from "../Components/Head";
import Breadcrumb from "../Components/Breadcrumb";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const AboutPage = () => {
  const breadcrumbItems = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
  ];
  return (
    <>
      <Head title="About" />
      <Header />
      <Breadcrumb breadcrumbs={breadcrumbItems} />
      <Content
        title="About Silent Improvement"
        intro="The mission of Silent Improvement is to create a centralized hub of
        self-improvement information on finance, physical fitness, learning
        a language, web development, or study techniques."
        quote="Our aim is to filter through the misinformation that is littered on
        the internet and only provide information that has worked personally
        for those at Silent Improvement."
      />
      <Footer />
    </>
  );
};

export default AboutPage;
