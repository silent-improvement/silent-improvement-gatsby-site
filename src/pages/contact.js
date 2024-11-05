import React, { useState, useEffect } from "react";
import Head from "../Components/Head";
import Breadcrumb from "../Components/Breadcrumb";
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const ContactPage = () => {
  const [data, setData] = useState({
    navMenu: [],
    breadcrumbs: [],
    content: [],
    footer: [],
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
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
      <Head title="Contact" />
      <Header data={data} />
      <Breadcrumb data={data.breadcrumbs.contact} />
      <Content data={data.content.contact} />
      <Footer data={data.footer} />
    </>
  );
};

export default ContactPage;
