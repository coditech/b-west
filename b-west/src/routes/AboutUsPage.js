import React from 'react';
import Header from "../components/Header";
import {AboutContent} from "../components/AboutContent";

const AboutUsPage = ({aboutUs}) => {
    const aboutHeader = aboutUs[0];
    const aboutUsSections = aboutUs.slice(1);
    return (
        <div>
            <Header {...aboutHeader}/>
            {
                aboutUsSections.map((about, index) => {
                    return (<AboutContent key={index} {...about}/>)
                })
            }
            <div style={{marginBottom: '100px'}}/>

        </div>
    )

}

export {AboutUsPage}