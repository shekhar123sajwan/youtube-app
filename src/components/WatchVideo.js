import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import { useParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const urlParams = useParams();

  const [iframeLink, setIframeLink] = useState(false);

  const link = `https://www.youtube.com/embed/${urlParams?.id}`;

  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="flex flex-col p-6 dark:bg-black dark:text-white">
      <div className="flex grow px-3">
        <iframe
          width="1000"
          height="500"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <LiveChatContainer />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchVideo;
