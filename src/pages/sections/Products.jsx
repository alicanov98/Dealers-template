import data from "../../assets/data/data";

const Products = () => {
  return (
    <section className="products">
      {data.map((product, key) => (
        <div key={product.id} className="product">
          {product.title === "Marc Jacobs Bag" ? <h4>SALE</h4> : ""}
          <div className="product_img">
            <img src={product.imgSrc} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <h2>{product.text}</h2>
          <p>
            {product.price}{" "}
            {product.title === "Marc Jacobs Bag" ? <span>$30.00</span> : ""}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Products;
