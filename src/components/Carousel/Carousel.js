import React, { Component } from "react";
import "./carousel.scss";
import { animateImgSwipe } from "../Home/animations";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.currentImgIndex = 0;
    this.nextImgIndex = 1;
    this.isNowLastImgShowing = false;
    this.interval = null;
  }
  state = {
    currentImgIndex: 0,
    nextImgIndex: 1,
    isNowLastImgShowing: false,
    images: [
      {
        url:
          "https://i.pinimg.com/originals/48/ce/0f/48ce0ff51e859364a3eb8238143899e0.png"
      },
      {
        url:
          "https://www.desktopbackground.org/download/1920x1080/2015/02/01/896301_wallpapers-tumblr-hd-wallpaper_2500x1600_h.png"
      },
      {
        url:
          "https://wallpapertag.com/wallpaper/full/f/7/0/153175-computer-wallpaper-tumblr-1920x1080-for-phone.jpg"
      },
      {
        url:
          "https://www.desktopbackground.org/download/o/2013/12/06/681013_tumblr-wallpapers-12df-hd-wallpapers_1920x1080_h.jpg"
      }
    ]
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("interval");
      const { currentImgIndex, nextImgIndex } = this.state;
      if (!this.isLastImg(currentImgIndex)) {
        animateImgSwipe(currentImgIndex, nextImgIndex);
        this.setState({
          currentImgIndex: currentImgIndex + 1,
          nextImgIndex: nextImgIndex + 1
        });
      } else {
        animateImgSwipe(currentImgIndex, 0);
        this.setState({
          currentImgIndex: 0,
          nextImgIndex: 1
        });
      }
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  isLastImg = currentImgIndex => {
    const { images } = this.state;
    const imagesLength = images.length;
    return imagesLength - 1 === currentImgIndex;
  };

  isNextLastImg = nextImgIndex => {
    const { images } = this.state;
    const imagesLength = images.length;
    return imagesLength - 1 === nextImgIndex;
  };

  render() {
    const {
      images,
      currentImgIndex,
      isNowLastImgShowing,
      nextImgIndex
    } = this.state;
    return (
      <div className="react-carousel">
        {images &&
          images.map((img, index) => {
            const isCurrent = index === currentImgIndex;
            const isNext = index === nextImgIndex;
            let className = "";
            if (isCurrent) {
              className = "swipe-img";
            } else if (isNext) {
              className = "swipe-img swipe-img__next";
            } else if (currentImgIndex === images.length) {
              className = "swipe-img swipe-img__next";
            } else {
              className = "swipe-img swipe-img__next";
            }
            return <img key={img.url} src={img.url} className={className} />;
          })}
        {/*<img className="swipe-img" src={currentImage.url} />

            <img className="swipe-img swipe-img__next" src={nextImage.url} />*/}
      </div>
    );
  }
}

export default Carousel;
