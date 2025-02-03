import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { truckReducer } from "./trucklist/truckReducer";
import { truckFilterReducer } from "./trucklist/truckFilterReducer";

const rootReducer = combineReducers({
  trucklist: truckReducer,
  filters: truckFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
