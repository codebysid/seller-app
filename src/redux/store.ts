import { configureStore } from "@reduxjs/toolkit";
import selectedCountrySliceReducer from "./slice/selectedCountry";

export const store = configureStore({
  reducer: {
    selectedCountry: selectedCountrySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
