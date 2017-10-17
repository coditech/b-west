import React from 'react';
import Header from "../components/Header";
import {AboutContent} from "../components/AboutContent";

class AboutUsPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            aboutUs: props.aboutUs
        }
    }


    render() {
        const aboutHeader = this.state.aboutUs[0];
        const aboutUsSections = this.state.aboutUs.slice(1);
        console.log('aboutUsSections =>',  this.state.aboutUs);
        return (
            <div>
                <Header {...aboutHeader}/>
                {
                    aboutUsSections.map((about, index) => {
                        return (<AboutContent {...about}/>)
                    })
                }
                <div style={{marginBottom: '100px'}}/>

            </div>
        )
    }
}

export {AboutUsPage}