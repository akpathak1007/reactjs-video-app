import React from "react";

const VideoItem = ({ video, onSelectedVideo }) => {
  const snippet = video.snippet;
  const thumbnail = snippet.thumbnails.medium.url;
  const title = snippet.title.slice(0,40)+'..';
  return (
    <div onClick={()=>onSelectedVideo(video)}  className="card mb-3 shadow" style={{cursor:'pointer'}}>
      <div className="row g-0">
        <div className="col-5">
          <img className="img-fluid d-block w-100" src={thumbnail} alt={title}  />
        </div>
        <div className="col-7">
          <div className="card-body">{title}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
