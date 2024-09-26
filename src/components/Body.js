import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "../utils/appSlice";
const Body = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    window.onload = (event) => {
      const darkModeOnLocal = JSON.parse(
        window.localStorage.getItem("isDarkMode")
      );
      dispatch(setThemeMode(darkModeOnLocal || isDarkMode));
      document.querySelector("body").className =
        darkModeOnLocal == true || isDarkMode == true ? "dark" : "light";
    };
  }, []);

  return (
    <div className="grid grid-flow-col dark:bg-black dark:text-white">
      {/* <Sidebar /> */}
      {/* <Outlet /> */}
      BODY components
    </div>
  );
};

export default Body;
