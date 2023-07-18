import React from "react";
import { Card } from "../../components/Card";

import contents from "../../Content";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

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
          {contents.map((content) => (
            <Card
              key={content.id}
              image={content.image}
              productName={content.productName}
              productType={content.productType}
              price={content.price}
              oldPrice={content.oldPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
