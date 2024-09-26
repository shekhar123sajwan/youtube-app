import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import appStore from "./utils/appStore";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import SearchVideosResult from "./components/SearchVideosResult";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import { useEffect } from "react";
import { setThemeMode } from "./utils/appSlice";

const AppComponent = () => {
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
    <div className="App">
      <Head />
      <div className="grid grid-flow-col dark:bg-black dark:text-white">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:id",
        element: <WatchVideo />,
      },
      {
        path: "search",
        element: <SearchVideosResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
