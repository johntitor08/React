import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;
  const navigate = useNavigate();    

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <div>ID: {id}</div>
      <div>Price: ${price}</div>
      <button onClick={() => navigate("/product-details/" + id)}>Buy</button>
    </div>
  );
}

export default Product;
