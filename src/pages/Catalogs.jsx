import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/pages/_catalogs.scss";
const Catalogs = () => {
  return (
    <section className="catalog">
      <div className="catalogTitles">
        <div className="container">
          <Link className="catalogHome catalogTitle" to="/home">
            Home
          </Link>
          <span className="catalogTitleLine">/</span>
          <Link className="catalogColor catalogTitle" to="/catalogs">
            Catalogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
