import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="p-5 shadow-md py-4 col-span-1 w-52 dark:bg-black dark:text-white dark:border-r-2">
        <div>
          <h1 className="font-bold text-md pt-2">Subscriptions</h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Explore</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Library</li>
            <li>History</li>
            <li>Music</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-md pt-2">History</h1>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Library</li>
            <li>History</li>
            <li>Music</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
