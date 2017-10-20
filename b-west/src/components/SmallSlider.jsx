import React from "react";

class SmallSlider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: props.images
        }
    }

    componentDidMount() {
        this.makeSlider();
    }

    makeSlider() {
        /*eslint-disable */
        const slider = this.slider;
        const $slider = $(slider);
        $slider.flexslider({
            animation: "fade",
            controlNav: "thumbnails"
        });
        /*eslint-enable */
    }

    render() {
        const {images} = this.state;
        let imagesCopy = images ? images : [];

        return (
            <div className="item-detail-page">
                <div className="images-slider" ref={ref => (this.slider = ref)}>
                    <ul className="slides">

                        {imagesCopy.map((imageSlide, index) => {
                            console.log('imageSlide ==< ', imageSlide)
                            return (
                                <li data-thumb={imageSlide.src} key={index}>
                                    <img
                                        className="img-responsive"
                                        src={imageSlide.src}
                                        alt={imageSlide.alt}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SmallSlider;
