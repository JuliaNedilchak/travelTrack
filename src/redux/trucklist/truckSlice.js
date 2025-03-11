// src/redux/tasksSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiTruckList } from "../../api";

export const apiRequestTruckList = createAsyncThunk(
  "truckList/getTrucks",
  async (_, thunkApi) => {
    try {
      const data = await apiTruckList();
      console.log(data);
      return data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const INITIAL_STATE = {
  items: [],
  location: "",
};
const truckSlice = createSlice({
  // Ім'я слайсу
  name: "trucks", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт case-редюсерів
  extraReducers: (builder) =>
    builder
      .addCase(apiRequestTruckList.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(apiRequestTruckList.fulfilled, (state, action) => {
        state.location = action.payload;
      }),
});

// Експортуємо фабрики екшенів
//export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Експортуємо редюсер слайсу
export const truckReducer = truckSlice.reducer;
