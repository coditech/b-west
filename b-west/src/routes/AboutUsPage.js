import React from 'react';
import Header from "../components/Header";
import {AboutContent} from "../components/AboutContent";

const AboutUsPage = ({aboutUs}) => {
    const aboutHeader = {
        title: aboutUs[0].title,
        content: aboutUs[0].content,
        image: {
            src: aboutUs[0].imageSrc,
            alt: aboutUs[0].imageAlt
        }
    };
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