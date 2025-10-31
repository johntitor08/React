import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  categoryFilter: "all",
  priceRange: [0, 1000],
  sortBy: "name", // name, price-low, price-high, rating
  categories: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    clearFilters: (state) => {
      state.searchQuery = "";
      state.categoryFilter = "all";
      state.priceRange = [0, 1000];
      state.sortBy = "name";
    },
  },
});

export const {
  setSearchQuery,
  setCategoryFilter,
  setPriceRange,
  setSortBy,
  setCategories,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
