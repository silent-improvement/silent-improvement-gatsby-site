import React, { useState, useEffect } from "react";
import Head from "../Components/Head";
import Breadcrumb from "../Components/Breadcrumb";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const AboutPage = () => {
  const [data, setData] = useState({
    navMenu: [],
    breadcrumbs: [],
    content: [],
    footer: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Head title="About" />
      <Header data={data} />
      <Breadcrumb breadcrumbs={data.breadcrumbs.about} />
      <Content data={data.content.about} />
      <Footer data={data.footer} />
    </>
  );
};

export default AboutPage;
