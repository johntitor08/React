import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  lastOrder: JSON.parse(localStorage.getItem("lastOrder")) || [], // initialize from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((p) => p.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    setLastOrder: (state, action) => {
      state.lastOrder = action.payload;
      localStorage.setItem("lastOrder", JSON.stringify(action.payload));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  setLastOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
