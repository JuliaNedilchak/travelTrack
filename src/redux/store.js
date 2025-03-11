import { configureStore } from "@reduxjs/toolkit";
import { truckReducer } from "./trucklist/truckSlice";
//import { truckReducer } from "./trucklist/truckSlice";

//const rootReducer = combineReducers({
//trucklist: truckReducer,
//filters: truckFilterReducer,
//});

//export const store = createStore(rootReducer);

//export const store = configureStore({
//reducer: { truckList: truckReducer },
//});
export const store = configureStore({
  reducer: {
    truckList: truckReducer,
  },
});
