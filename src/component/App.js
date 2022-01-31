import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onSearchChange("buildings");
  }
  onSearchChange = async (input) => {
    input = input ? input : "stories";
    const res = await youtube.get("search", {
      params: {
        q: input,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  };
  onSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo: selectedVideo });
  };
  render() {
    return (
      <div className="container my-4">
        <SearchBar onChange={this.onSearchChange} />
        <div className="row">
          <div className="col-12 col-lg-8">
            {" "}
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="col-12 col-lg-4">
            <VideoList
              videos={this.state.videos}
              onSelectedVideo={this.onSelectedVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
