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
  filters: {
    location: "",
    equipment: {
      AC: false,
      Automatic: false,
      Kitchen: false,
      TV: false,
      Bathroom: false,
    },
    form: "",
  },
};
const truckSlice = createSlice({
  // Ім'я слайсу
  name: "trucks", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    setLocationFilter: (state, action) => {
      state.filters.location = action.payload;
    },
    setEquipmentTypeFilter: (state, action) => {
      state.filters.equipment = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.filters.form = action.payload;
    },
  }, // Об'єкт case-редюсерів
  extraReducers: (builder) =>
    builder.addCase(apiRequestTruckList.fulfilled, (state, action) => {
      state.items = action.payload;
    }),
});

// Експортуємо фабрики екшенів
//export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Експортуємо редюсер слайсу
export const { setLocationFilter, setEquipmentTypeFilter, setTypeFilter } =
  truckSlice.actions;
export const truckReducer = truckSlice.reducer;
