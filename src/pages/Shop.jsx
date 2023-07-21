import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/data.json";
import {Button} from '../components/Button'
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
              <div className="row">
                <h4 className="allShopTitle">Shop All</h4>
                <div className="filterShop">
                  <div className="row">
                  <div className="filterDropdown">
                  <Button variant="filterDropdownBtn" text="LATEST"/>
                  <ul className="filterDropdownList" >
                    <li className="filterDropdownItem">Men</li>
                    <li className="filterDropdownItem">Women</li>
                    <li className="filterDropdownItem">Children</li>
                  </ul>
                  </div>
                  <div className="filterDropdown">
                  <Button variant="filterDropdownBtn" text="Referance" />
                  <ul className="filterDropdownList">
                    <li className="filterDropdownItem">Referance</li>
                    <li className="filterDropdownItem">Name, A to Z</li>
                    <li className="filterDropdownItem">Name, Z to A</li>
                  </ul>
                  </div>
                  </div>
                </div>
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
              <h4 className="titleRight">Categories</h4>
              <ul className="categoriesList">
                <li className="categoriesItem">
                  <Link>Men</Link>
                  <span>(2,220)</span>
                </li>
                <li className="categoriesItem">
                  <Link>Women</Link>
                  <span>(2,220)</span>
                </li>
                <li className="categoriesItem">
                  <Link>Children</Link>
                  <span>(2,220)</span>
                </li>
              </ul>
            </div>
            <div className="leftBottom">       
            <div className="filterPrice">
              <h4 className="titleRight">Filter by price</h4>
              <input type="range" />
             <div className="price">
             <span>$0</span>
              <span> - </span>
              <span>$486</span>
             </div>
            </div>
            <h4 className="titleRight">Size</h4>
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
            <h4 className="titleRight">Color</h4>
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
      </div>
    </section>
  );
};

export default Shop;
