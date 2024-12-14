import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { truckReducer } from "./trucklist/truckReducer";

const rootReducer = combineReducers({
  trucklist: truckReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
