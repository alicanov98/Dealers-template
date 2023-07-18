import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="shop">
      <div className="shopTitles">
        <div className="container">
          <Link className="shopHome shopTitle" to="/">
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
