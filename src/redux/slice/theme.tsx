import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  dark: boolean;
}

const initialState: ITheme = {
  dark: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
