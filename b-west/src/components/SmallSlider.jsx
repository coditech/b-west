import React from "react";

const dataTest = [
  {
    url: "/assets/images/shop/item-detail-img-1.jpg",
    alt: "img1"
  },
  {
    url: "/assets/images/shop/item-detail-img-2.jpg",
    alt: "img2"
  },
  {
    url: "/assets/images/shop/item-detail-img-3.jpg",
    alt: "img3"
  }
];

class SmallSlider extends React.Component {
  componentDidMount() {
    this.makeSlider();
  }
  makeSlider() {
    /*eslint-disable */
    const slider = this.slider;
    const $slider = $(slider);
    //console.log('hmmm',slider,$slider)
    $slider.flexslider({
      animation: "fade",
      controlNav: "thumbnails"
    });
    /*eslint-enable */
  }
  render() {
    return (
        <div className="container">
      <div className="col-sm-6 col-sm-push-3">
        <div className="item-detail-page">
          <div className="images-slider" ref={ref => (this.slider = ref)}>
            <ul className="slides">
              {dataTest.map((imageSlide, index) => (
                <li data-thumb={imageSlide.url} key={index}>
                  <img
                    className="img-responsive"
                    src={imageSlide.url}
                    alt={imageSlide.alt}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SmallSlider;
