import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../utils/youtubeVideosSlice";
import VideoCard from "./VideoCard";
import {
  ShimmerCategoryItems,
  ShimmerContentBlock,
} from "shimmer-effects-react";

const VideoContainer = () => {
  const videoStore = useSelector((store) => store.youtubevideos);

  const dispatch = useDispatch();

  const fetchYoutbeVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();

    dispatch(setVideos(data.items));
  };
  useEffect(() => {
    fetchYoutbeVideos();
  }, []);

  return videoStore?.videos?.length == 0 ? (
    <div>
      <ShimmerCategoryItems
        items={10}
        mode="light"
        imageRounded={0}
        imageWidth={100}
      />
    </div>
  ) : (
    <div className="flex flex-wrap">
      {videoStore?.videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {videoStore?.videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {videoStore?.videos?.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
