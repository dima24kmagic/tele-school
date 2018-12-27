import React, { Component } from "react";
import axios from "axios";
import "./media.scss";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";

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

  getHighestThumbnailUrl = thumbnails => {
    const high = thumbnails.high;
    const standard = thumbnails.standard;
    const maxres = thumbnails.maxres;
    if (maxres) return maxres;
    if (standard) return standard;
    if (high) return high;
  };
  render() {
    const { videos } = this.state;
    return (
      <div className="media-wrapper">
        <div className="display-1">Школьные видео</div>
        <div className="videos">
          {videos &&
            videos.map(video => {
              const { id, snippet } = video;
              const { resourceId, thumbnails, title } = snippet;
              const { videoId } = resourceId;
              const thumbPath = this.getHighestThumbnailUrl(thumbnails).url;
              return (
                <div className="video" key={videoId}>
                  <YouTubeVideo
                    videoID={videoId}
                    iClassName={"video__frame"}
                    thumbClassName={"video__thumb"}
                    thumbPath={thumbPath}
                    videoTitle={title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default MediaCenter;
