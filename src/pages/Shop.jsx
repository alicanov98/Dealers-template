import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/pages/_shop.scss";

const Shop = () => {
  return (
    <section className="shop">
      <div className="shopTitles">
        <div className="container">
          <Link className="shopHome shopTitle" to="/home">
            Home
          </Link>
          <span className="shopTitleLine">/</span>
          <Link className="shopColor shopTitle" to="/Shop">
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;
