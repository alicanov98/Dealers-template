import React from "react";
import { Card } from "../../components/Card";

import contents from "../../Content";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";

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
            loop={{
              loop: true,
            }}
            className="mySwiper"
          >
            {contents.map((content) => (
              <SwiperSlide>
                <Card
                  key={content.id}
                  image={content.image}
                  productName={
                    content.productName === "Jacobs Bag" ? (
                      <h4 className="saleCard">Sale</h4>
                    ) : (
                      " "
                    )
                  }
                  productType={content.productType}
                  price={content.price}
                  oldPrice={content.oldPrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Collection;
