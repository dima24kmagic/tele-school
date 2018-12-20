import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "./media.scss";
const API_KEY = "AIzaSyDFojVxzl4zgtj-bJSiL5vNhtNuAeO4Gn0";
const PLAYLIST_ID = "PLF9nSOO5SmunZVbDYXotvPiZX3D8RwOjY";
const CHANNEL_ID = "UCjGcnm6uamUtmvG4pGPgigA";

class MediaCenter extends Component {
  state = {
    videos: null
  };
  componentWillMount = async () => {
    const videos = await this.getVideos();
    console.log(videos);
    this.setState({
      videos
    });
  };

  getVideos = async () => {
    return (await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          part: "snippet",
          key: API_KEY,
          playlistId: PLAYLIST_ID,
          maxResults: 50
        }
      }
    )).data.items;
  };

  onVideoReady = e => {
    e.target.pauseVideo();
  };
  render() {
    const { videos } = this.state;
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div className="media-wrapper">
        <div className="display-1">Школьные видео</div>
        <div className="videos">
          {videos &&
            videos.map(video => {
              const { id, snippet } = video;
              const { resourceId } = snippet;
              const { videoId } = resourceId;
              return (
                <YouTube
                  className="video"
                  key={id}
                  videoId={videoId}
                  opts={opts}
                  onReady={this.onVideoReady}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default MediaCenter;
