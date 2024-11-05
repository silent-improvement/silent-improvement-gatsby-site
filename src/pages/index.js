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
        const response = await fetch("http://localhost:5000/api/data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (updatedContent) => {
    const updatedData = { ...data, content: { ...data.content, index: updatedContent } };

    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setData(updatedData);
        console.log("Data updated successfully");
      } else {
        console.error("Error updating data:", await response.text());
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <Head title="Home Page" />
      <Header data={data} />
      <Content data={data.content.index} onSave={handleSave} />
      <CardButton data={data.cardButtons} />
      <Footer data={data.footer} />
    </>
  );
};

export default IndexPage;
