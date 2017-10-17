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
