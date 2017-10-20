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

        }
    }

    render() {
        const {title, content, headerTitle} = this.state;
        return (
            <div>
                <Header title={headerTitle} additionalClass={'products-header'}/>
                <ContactInfo title={title} content={content}/>
            </div>
        )
    }
}

export {ContactUsPage};