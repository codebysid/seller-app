import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveToLocalStorage } from "../../lib/helper";

interface ITheme {
  dark: boolean;
}

const isSystemDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const userPreferenceMode = getLocalStorage("darkMode");

const parsedUserPreferenceMode =
  userPreferenceMode && JSON.parse(userPreferenceMode);

const initialState: ITheme = {
  dark: parsedUserPreferenceMode?.dark ?? isSystemDarkMode ?? false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
      saveToLocalStorage("darkMode", JSON.stringify({ dark: state.dark }));
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
