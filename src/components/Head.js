import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constants";
import { setSearchResult } from "../utils/searchSlice";
import { setSearchVideosResult, setVideos } from "../utils/youtubeVideosSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const searchStore = useSelector((store) => store.search);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  const isDarkModeInLocal = useSelector((store) => store.app.isDarkModeInLocal);

  const [query, setquery] = useState("");

  const [showList, setShowList] = useState(true);
  const [searchReasult, setSearchReasult] = useState(null);
  const searchYoutubeVidoes = async () => {
    if (!query) return;
    const data = await fetch(YOUTUBE_SEARCH_API + "&q=" + query);
    const json = await data.json();
    setSearchReasult(json?.[1]);
    dispatch(setSearchResult({ [query]: json?.[1] }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchStore[query]) {
        setSearchReasult(searchStore[query]);
      } else {
        searchYoutubeVidoes();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const handleOnSearch = (e) => {
    setquery(e.target.value);
    setShowList(true);
  };

  const handlOnSearchListClick = async (e) => {
    document.getElementsByClassName("search-videos")[0].value =
      e.target?.innerText.trim();
    setShowList(false);
    const data = await fetch(
      YOUTUBE_SEARCH_SUGGESTION_API + "&q=" + e.target?.innerText.trim()
    );
    const json = await data.json();
    dispatch(setSearchVideosResult(json?.items));
  };

  return (
    <div className="grid grid-flow-row md:grid-flow-col shadow-md py-1 dark:bg-black dark:text-white dark:shadow-xl">
      <div className="flex">
        <img
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className="w-10 h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="w-20 h-12"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
        />
      </div>
      <div className="flex items-start content-start py-3 sm:py-0 md:py-0">
        <div className="w-[100%] relative">
          <input
            onChange={handleOnSearch}
            onBlur={() => setTimeout(() => setShowList(false), 1000)}
            className="search-videos w-full border-2 rounded-l-full py-2 px-2 dark:bg-black dark:text-white dark:border-r-2"
            type="text"
            defaultValue={query}
            placeholder="Search"
          />
          {searchReasult && showList && (
            <ul className="absolute bg-white w-[100%] z-10 p-0 rounded-md dark:bg-black dark:text-white dark:border-white">
              {searchReasult?.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer my-1 p-1 hover:bg-gray-200 dark:hover:bg-gray dark:text-white dark:hover:text-black"
                  onClick={handlOnSearchListClick}
                >
                  <h1 className="text-sm p-1 font-bold">
                    <Link to={`search?q=${item}`}>{item}</Link>
                  </h1>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className={`border-2 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded -mx-1 rounded-r-full bg-gray-500  dark:bg-black`}
        >
          Search
        </button>
      </div>
      <div className="absolute sm:relative md:relative sm:flex md:flex justify-end mr-2 right-0 top-2">
        <div
          className="mx-2 my-1 p-1"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {!isDarkMode ? (
            <button
              className="sc-bqWxrE Nav__InnerNavLink-sc-1gjftm8-1 huMkvp"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={0}
                style={{
                  width: 24,
                  height: 24,
                }}
                viewBox="0 0 24 24"
              >
                <g stroke="none">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                </g>
              </svg>
            </button>
          ) : (
            <button
              className="sc-bqWxrE Nav__InnerNavLink-sc-1gjftm8-1 huMkvp"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={0}
                style={{
                  width: 24,
                  height: 24,
                }}
                viewBox="0 0 24 24"
              >
                <g stroke="none">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z" />
                </g>
              </svg>
            </button>
          )}
        </div>
        <img
          className="w-11 h-10"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
        />
      </div>
    </div>
  );
};

export default Head;
