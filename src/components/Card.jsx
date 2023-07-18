export const Card = (props) => {
  return (
    <div key={props.id} className="card">
      <img src={props.image} alt="product" />
      <div className="cardCont">
        <h3>{props.productName}</h3>
        <span className="productTitle">{props.productType}</span>
        <span className="productPrice">
          ${props.price}
          <span className="delPrice">{props.oldPrice}</span>
        </span>
      </div>
    </div>
  );
};
