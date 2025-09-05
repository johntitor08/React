import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Kullanıcıları çek
export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Kullanıcı ekle
export const addUserAsync = createAsyncThunk(
  "user/addUserAsync",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, user);
      return response.data; // JSONPlaceholder fake id döner
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Kullanıcı sil
export const removeUserAsync = createAsyncThunk(
  "user/removeUserAsync",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id; // başarılı silme sonrası id döndür
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchUsers
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addUserAsync
      .addCase(addUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // removeUserAsync
      .addCase(removeUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(removeUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
