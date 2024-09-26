import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isDarkMode: JSON.parse(window.localStorage.getItem("isDarkMode")) || false,
    isDarkModeInLocal: JSON.parse(window.localStorage.getItem("isDarkMode"))
      ? true
      : false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      window.localStorage.setItem("isDarkMode", state.isDarkMode);
      document.querySelector("body").className =
        state.isDarkMode == true ? "dark" : "light";
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideMenu: (state) => {
      state.isMenuOpen = false;
    },
    showMenu: (state) => {
      state.isMenuOpen = true;
    },
    setThemeMode: (state, action) => {
      state.isDarkMode = action.payload;
      window.localStorage.setItem("isDarkMode", state.isDarkMode);
      document.querySelector("body").className =
        state.isDarkMode == true ? "dark" : "light";
    },
  },
});

export const { toggleTheme, toggleMenu, hideMenu, showMenu, setThemeMode } =
  appSlice.actions;
export default appSlice.reducer;
