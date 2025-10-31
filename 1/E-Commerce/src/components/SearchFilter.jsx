import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setPriceRange,
  setSortBy,
  clearFilters,
  setCategories,
} from "../redux/slices/filterSlice";
import "../css/SearchFilter.css";

function SearchFilter({ darkMode }) {
  const dispatch = useDispatch();
  const { categoryFilter, priceRange, sortBy, categories } = useSelector(
    (state) => state.filter
  );
  const { products } = useSelector((state) => state.product);

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handlePriceRangeChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch(setPriceRange([0, value]));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  React.useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      dispatch(setCategories(uniqueCategories));
    }
  }, [products, dispatch]);

  return (
    <div className={`search-filter-container ${darkMode ? "dark" : ""}`}>
      <div className="filters-section">
        <div className="filter-group">
          <label>Category:</label>
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Max Price: ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceRangeChange}
            className="price-slider"
          />
        </div>

        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <button className="clear-filters-btn" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;
