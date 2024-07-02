import * as React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import PageContent from "../Components/PageContent";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const AboutPage = () => {
  return (
    <>
      <Head title="About" />
      <Header />
      <PageContent
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
