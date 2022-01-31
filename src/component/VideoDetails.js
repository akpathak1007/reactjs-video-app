import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="card mb-5 h-100">
      <iframe
        title="video player"
        width="100%"
        height="80%"
        className=""
        src={videoSrc}
      ></iframe>
      <div className="card-body">
        <h6>{video.snippet.title}</h6>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
