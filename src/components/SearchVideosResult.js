import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { showMenu } from "../utils/appSlice";
import VideoCard from "./VideoCard";
import { ShimmerCategoryItems } from "shimmer-effects-react";
const SearchVideosResult = () => {
  const dispatch = useDispatch();
  const [q] = useSearchParams();

  const videoResults = useSelector((store) => store.youtubevideos.searchResult);

  dispatch(showMenu());

  return (
    <div>
      <h1 className="text-2xl font-bold">Search: {q}</h1>

      {videoResults?.length == 0 ? (
        <div>
          <ShimmerCategoryItems
            items={10}
            mode="light"
            imageRounded={0}
            imageWidth={100}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoResults?.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchVideosResult;
