import React, { useState, useEffect } from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import Breadcrumb from "../Components/Breadcrumb";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

const ResourcesPage = () => {
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
      <Head title="Resources" />
      <Header data={data} />
      <Breadcrumb data={data.breadcrumbs.resources} />
      <Content data={data.content.resources} />
      <Footer data={data.footer} />
    </>
  );
};

export default ResourcesPage;
