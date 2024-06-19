import React from "react";
import "../styles/main.scss"

const Footer = () => {
  const footerLinks = [
    {
      url: "https://www.tiktok.com/@silent_improvement",
      title: "Link to the Silent Improvement Tik Tok Page",
      brandsClass: "fa-brands",
      socialClass: "fa-tiktok",
    },
    {
      url: "https://www.instagram.com/silent__improvement/",
      title: "Link to the Silent Improvement Instagram",
      brandsClass: "fa-brands",
      socialClass: "fa-instagram",
    },
    {
      url: "https://www.facebook.com/",
      title: "Link to the Silent Improvement Facebook",
      brandsClass: "fa-brands",
      socialClass: "fa-facebook-f",
    },
    {
      url: "https://www.twitter.com/",
      title: "Link to the Silent Improvement Twitter",
      brandsClass: "fa-brands",
      socialClass: "fa-x-twitter",
    },
    {
      url: "https://www.youtube.com/",
      title: "Link to the Silent Improvement YouTube",
      brandsClass: "fa-brands",
      socialClass: "fa-youtube",
    },
    {
      url: "https://www.github.com/",
      title: "Link to the Silent Improvement Github",
      brandsClass: "fa-brands",
      socialClass: "fa-github",
    },
    {
      url: "https://www.pintrest.com/",
      title: "Link to the Silent Improvement Pintrest",
      brandsClass: "fa-brands",
      socialClass: "fa-pinterest-p",
    },
  ];

  return (
    <div className="footer">
      <div className="footer__social-media">
        {footerLinks.map((fl, index) => (
          <a key={index} href={fl.url} target="_blank" rel="noopener noreferrer" title={fl.title}>
            <i className={`${fl.brandsClass} ${fl.socialClass}`}></i> {/* Combine classes correctly */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
