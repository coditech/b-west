import React from 'react';
import {ContactInfo} from "../components/Contactinfo";
import Header from "../components/Header";

class ContactUsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            headerTitle: props.contactUs.headerTitle,
            title: props.contactUs.title,
            content: props.contactUs.content,
            bannerBackgroundImage: props.contactUs.bannerBackgroundImage,
            showBackgroundImage: props.contactUs.showBackgroundImage,

        }
    }

    render() {
        const {title, content, headerTitle, bannerBackgroundImage, showBackgroundImage} = this.state;
        const image = {
            src: bannerBackgroundImage
        }
        return (
            <div>
                <Header title={headerTitle} additionalClass={'products-header'} actionButton={{show: false}}
                        showBackgroundImage={showBackgroundImage} image={image}/>
                <ContactInfo title={title} content={content}/>
            </div>
        )
    }
}

export {ContactUsPage};