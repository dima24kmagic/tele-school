import React, { Component } from "react";
import "./media.scss";
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo";
import { getVideos } from "../../utils/api";

class MediaCenter extends Component {
  state = {
    videos: null
  };
  componentWillMount() {
    this.getVideosIfNotInProps();
  }

  getVideosIfNotInProps = async () => {
    if (!this.props.videos) {
      const videos = await getVideos();
      this.setState({
        videos
      });
    } else {
      this.setState({
        videos: this.props.videos
      });
    }
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
                  <div className="video__title">{title}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default MediaCenter;
