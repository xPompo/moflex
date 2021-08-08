import React from "react";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";

function VideoTrailer({ closeVideoHandler }) {
  const key = useSelector((state) => state.videoKey);
  console.log(key);
  return (
    <>
      <div onClick={closeVideoHandler} className="video__overlay"></div>
      <ReactPlayer
        className="video-player"
        controls
        width={1024}
        height={640}
        url={`https://www.youtube.com/watch?v=${key}`}
      />
    </>
  );
}

export default VideoTrailer;
