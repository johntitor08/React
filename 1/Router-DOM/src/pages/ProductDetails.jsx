import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();
  const { products } = data;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Ürün bulunamadı!</h2>;
  }

  return (
    <div>
      <h2>Ürün Detayları</h2>
      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Ad:</strong> {product.name}
      </p>
      <p>
        <strong>Fiyat:</strong> {product.price}₺
      </p>
    </div>
  );
}

export default ProductDetails;
