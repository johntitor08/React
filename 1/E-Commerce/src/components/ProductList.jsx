import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import "../css/Product.css";

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button
            className="add-to-cart"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
