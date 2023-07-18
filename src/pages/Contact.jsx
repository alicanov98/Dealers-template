import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact">
      <div className="img"></div>
      <div className="contactTitles">
        <div className="container">
          <Link to="/home" className="contactHome title">
            Home
          </Link>
          <span className="line title">/</span>
          <Link to="/contact title" className="contactTitle">
            Contact
          </Link>
        </div>
      </div>
      <div className="container"></div>
    </section>
  );
};

export default Contact;
