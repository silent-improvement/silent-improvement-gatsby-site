import * as React from "react";
import Head from "../Components/Head";
import Header from "../Components/Header";
import PageContent from "../Components/PageContent";
import Footer from "../Components/Footer";
import "../styles/main.scss";

const IndexPage = () => {
  const cardButtonsData = [
    {
      text: "Click here to view Alex Hormozi, a reputable millionaire that gives sound advice on how to accumulate wealth and financial freedom through knowledge and hard work. He is focused on product-based business models.",
      url: "https://www.youtube.com/@AlexHormozi",
    },
    {
      text: "Click here to view Jeff Nippard, a renouned science-based bodybuilder who cites studies to back up how to most optimally gain muscle, accrue strength, and optimise your workouts.",
      url: "https://www.youtube.com/@JeffNippard",
    },
    {
      text: "Click here to view Ali Abdaal, a former doctor now turned productivity content creator. It was from him that I learned the art of studying and business / entrepreneurial information.",
      url: "https://www.youtube.com/@aliabdaal",
    },
  ];
  return (
    <>
      <Head title="Home Page" />
      <Header />
      <PageContent
        title="Your first step to bettering yourself"
        intro="To whom this may concern:"
        quote={`"You have made the leap to improve yourself, whether it's financial,
          career-wise, or simply building better habits. This is a landing
          page of collated resources and advice that have aided me in pursuing
          a greater version of myself. I hope it can be of help, for these
          things have helped me to strive for greatness."`}
        button="Click here for more info"  
        cardButtons={cardButtonsData}
      />
      <Footer />
    </>
  );
};

export default IndexPage;
