import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const cardWidth = isMenuOpen ? "w-[300px]" : "w-[270px]";

  return (
    <Link
      to={`/watch/${
        typeof video.id === "object" ? video.id.videoId : video.id
      }`}
      className={`${cardWidth} shadow-md m-3`}
    >
      <div
        key={typeof video.id === "object" ? video.id.videoId : video.id}
        className="p-3"
      >
        <img
          className="w-full"
          src={video.snippet?.thumbnails.high.url}
          alt="thumbnail"
        />
        <h1 className="font-bold text-sm mt-2">{video?.snippet?.title}</h1>
        <p className="text-xs truncate line-clamp-3 block pt-2">
          {video?.snippet?.description}
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
