import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/data.json";
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
      <div className="container">
        <div className="row">
          <div className="shopLeft">
            <div className="shopLeftTitle">
              <h4>Shop All</h4>
              <div className="filterShop">
                <select>
                  <option value="1">Men</option>
                  <option value="2">Women</option>
                  <option value="3">Children</option>
                </select>
                <select>
                  <option value="1">Referance</option>
                  <option value="2">Name, A to Z</option>
                  <option value="3">Name, Z to A</option>
                </select>
              </div>
            </div>
            <div className="products">
              {data.products.map((product, index) => (
                <div key={index} className="product">
                  {product.title === "Marc Jacobs Bag" ? <h4>SALE</h4> : ""}
                  <div className="product_img">
                    <img src={product.imgSrc} alt={product.title} />
                  </div>
                  <h3>{product.title}</h3>
                  <h2>{product.text}</h2>
                  <p>
                    {product.price}{" "}
                    {product.title === "Marc Jacobs Bag" ? (
                      <span>$30.00</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="shopRight">
            <div className="shopCatagories">
              <h4>Categories</h4>
              <ul className="categoriesList">
                <li className="categoriesItem">
                  <Link>Men</Link>
                  <span>(2,220)</span>
                </li>
                <li className="categoriesItem">
                  <Link>Men</Link>
                  <span>(2,220)</span>
                </li>
                <li className="categoriesItem">
                  <Link>Men</Link>
                  <span>(2,220)</span>
                </li>
              </ul>
            </div>
            <div className="filterPrice">
              <h4>Filter by price</h4>
              <input type="radio" />
              <span>$0</span>
              <span>-</span>
              <span>$486</span>
            </div>
            <h4>Size</h4>
            <ul className="sizeList">
              <li className="sizeItem">
                <input type="checkbox" />
                Small (2,319)
              </li>
              <li className="sizeItem">
                <input type="checkbox" />
                Medium (1,282)
              </li>
              <li className="sizeItem">
                <input type="checkbox" />
                Large (1,392)
              </li>
            </ul>
            <h4>Color</h4>
            <ul className="colorList">
              <li className="colorItem">
                <span className="color" id="red"></span>
                Red (2,429)
              </li>
              <li className="colorItem">
                <span className="color" id="green"></span>
                Green (2,298)
              </li>
              <li className="colorItem">
                <span className="color" id="blue"></span>
                Blue (1,075)
              </li>
              <li className="colorItem">
                <span className="color" id="purple"></span>
                Purple (1,075)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
