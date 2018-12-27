import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Path to thumbnail */
  thumbPath: PropTypes.string,
  /** video ID*/
  videoID: PropTypes.string.isRequired,
  /** Classname for iframe */
  iClassName: PropTypes.string,
  /** Thumbnail div class */
  thumbClassName: PropTypes.string,
  /** Video title*/
  videoTitle: PropTypes.string
};

const defaultProps = {};

const styles = {};

/**
 * Youtube Video
 */
export default class YouTubeVideo extends Component {
  state = {
    isClicked: false
  };

  showVideo = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    const {isClicked} = this.state;
    const {
      thumbPath,
      videoID,
      iClassName,
      videoTitle,
      thumbClassName,
      location
    } = this.props;
    return (
      <Fragment>
        {isClicked ? (
          <iframe
            className={iClassName}
            frameBorder='0'
            allowFullScreen='1'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            title='YouTube video player'
            width='640'
            height='360'
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&enablejsapi=1&origin=${location}&widgetid=1`}
            id='widget2'
          />
        ) : (
          <div className={thumbClassName} onClick={this.showVideo}>
            <div className='video-data'>
              <div className='video-name'>{videoTitle}</div>
            </div>
            <img src={thumbPath} alt='thumbnail'/>
          </div>
        )}
      </Fragment>
    );
  }
}

YouTubeVideo.propTypes = propTypes;
YouTubeVideo.defaultProps = defaultProps;
