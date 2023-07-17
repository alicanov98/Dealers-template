import React from "react";
import "../assets/scss/pages/_collections.scss";
import ProductOne from "../assets/images/product_1.jpg.webp";
import ProductTwo from "../assets/images/product_2.jpg.webp";
import ProductThree from "../assets/images/product_3.jpg.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Collection = () => {
  return (
    <section className="collection">
      <div className="container">
        <div className="title">
          <h2>Collections</h2>
        </div>
        <div className="cardBox">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card">
                <img src={ProductOne} alt="product" />
                <div className="cardCont">
                  <h3>The Shoe</h3>
                  <span className="productTitle">Summer Collection</span>
                  <span className="productPrice">$19.50</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={ProductOne} alt="product" />
                <div className="cardCont">
                  <h3>The Shoe</h3>
                  <span className="productTitle">Summer Collection</span>
                  <span className="productPrice">$19.50</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={ProductOne} alt="product" />
                <div className="cardCont">
                  <h3>The Shoe</h3>
                  <span className="productTitle">Summer Collection</span>
                  <span className="productPrice">$19.50</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={ProductOne} alt="product" />
                <div className="cardCont">
                  <h3>The Shoe</h3>
                  <span className="productTitle">Summer Collection</span>
                  <span className="productPrice">$19.50</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={ProductOne} alt="product" />
                <div className="cardCont">
                  <h3>The Shoe</h3>
                  <span className="productTitle">Summer Collection</span>
                  <span className="productPrice">$19.50</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="card">
            <img src={ProductTwo} alt="product" />
            <div className="cardCont">
              <h3>The Belt</h3>
              <span className="productTitle">Summer Collection</span>
              <span className="productPrice">$39.50</span>
            </div>
          </div>
          <div className="card">
            <img src={ProductThree} alt="product" />
            <div className="cardCont">
              <h3>Marc Jacobs Bag</h3>
              <span className="productTitle">Summer Collection</span>
              <span className="productPrice">
                $25.50 <span className="delPrice">$30.00</span>
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Collection;
