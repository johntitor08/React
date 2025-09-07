import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
  { id: 4, name: "Product D", price: 250 },
  { id: 5, name: "Product E", price: 300 },
];

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
