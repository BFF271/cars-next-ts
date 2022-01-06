import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  themeType: 'light' | 'dark';
};

const initialState: InitialState = {
  themeType: 'light',
};

const themeSlice = createSlice({
  name: '@theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeType = state.themeType === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
