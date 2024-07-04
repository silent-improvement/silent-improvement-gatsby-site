import React from "react";

const Head = ({ title }) => {
  return (
    <>
      {/* setting font/social media icon cdns and favicon + page title */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.cdnfonts.com/css/pt-sans-2" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v6.4.2/css/all.css"
      />
      <title>{title}</title>
    </>
  );
};

export default Head;
