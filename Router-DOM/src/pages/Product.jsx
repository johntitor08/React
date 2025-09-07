import React from "react";

function Product({ product }) {
  const { id, name, price } = product;

  const handleBuy = () => {
    alert(`You bought ${name} for $${price}!`);
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <div>ID: {id}</div>
      <div>Price: ${price}</div>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default Product;
