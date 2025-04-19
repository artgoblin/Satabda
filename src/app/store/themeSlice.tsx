import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    color: "dark",
  },
  reducers: {
    dark: (state) => {
      state.color = "dark";
    },
    light: (state) => {
      state.color = "light";
    },
  },
});

export const { dark, light } = themeSlice.actions;
export default themeSlice.reducer;
