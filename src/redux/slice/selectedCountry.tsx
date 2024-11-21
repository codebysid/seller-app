import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  title: string;
}

const initialState: IInitialState = {
  title: "usa",
};

export const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState,
  reducers: {
    updateSelectedCountry: (
      state,
      action: PayloadAction<{ title: string }>
    ) => {
      state.title = action.payload.title;
    },
  },
});
export const { updateSelectedCountry } = selectedCountrySlice.actions;

export default selectedCountrySlice.reducer;
