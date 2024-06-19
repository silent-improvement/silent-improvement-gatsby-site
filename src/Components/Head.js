import React from "react";
import logo from "../images/logo.png";

const Head = () => {
    return (
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/pt-sans-2" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.4.2/css/all.css"
          />
          <title>Home Page</title>
          <link rel="icon" href={logo} />
        </>
      );
}

export default Head;