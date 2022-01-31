import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderVideos = videos.map((video) => {
    const id = video.id.videoId;
    return (
      <VideoItem key={id} video={video} onSelectedVideo={onSelectedVideo} />
    );
  });
  return <div>{renderVideos}</div>;
};

export default VideoList;
