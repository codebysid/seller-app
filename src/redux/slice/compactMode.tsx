import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isCompactMode: boolean;
}

const initialState: IInitialState = {
  isCompactMode: false,
};

const compactMode = createSlice({
  name: "compactMode",
  initialState,
  reducers: {
    updateCompactMode: (state) => {
      state.isCompactMode = !state.isCompactMode;
    },
  },
});

export const { updateCompactMode } = compactMode.actions;
export default compactMode.reducer;
