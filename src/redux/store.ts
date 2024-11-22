import { configureStore } from "@reduxjs/toolkit";
import selectedCountrySliceReducer from "./slice/selectedCountry";
import isCompactModeSliceReducer from "./slice/compactMode";

export const store = configureStore({
  reducer: {
    selectedCountry: selectedCountrySliceReducer,
    isCompactMode: isCompactModeSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
