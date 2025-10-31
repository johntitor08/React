import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import "../css/Product.css";

function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.product);
  const { searchQuery, categoryFilter, priceRange, sortBy } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || product.category === categoryFilter;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case "name":
      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [products, searchQuery, categoryFilter, priceRange, sortBy]);

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
        filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <p className="price">${product.price}</p>
              {product.rating && (
                <p className="rating">
                  ⭐ {product.rating.rate} ({product.rating.count})
                </p>
              )}
            </div>
            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
