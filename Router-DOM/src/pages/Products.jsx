import React from "react";
import Product from "./Product";
import data from "../data/products.json";

const { products } = data;

function Products() {
  return (
    <div className="page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
