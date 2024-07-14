import React, { useState, useEffect } from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import CardButton from "../Components/CardButton";
import "../styles/main.scss";

const IndexPage = () => {
  const [data, setData] = useState({
    navMenu: [],
    cardButtons: [],
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
      <Head title="Home Page" />
      <Header data={data} />
      <Content data={data.content} />
      <CardButton data={data.cardButtons} />
      <Footer data={data.footer} />
    </>
  );
};

export default IndexPage;
