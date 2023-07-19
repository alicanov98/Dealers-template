import data from "../../assets/data/data.json";
const Products = () => {
  return (
    <section className="products">
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
            {product.title === "Marc Jacobs Bag" ? <span>$30.00</span> : ""}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Products;
