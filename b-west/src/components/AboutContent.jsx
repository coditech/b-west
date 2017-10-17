import React from "react";
import "../styles/AboutContent.css";

const AboutContent = ({title, content,image}) => (
    <div className={'section-container'}>
        <div className={"about-section"}>
            <h2 className={'title'}>{title}</h2>
            <div className="about-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {
            image ?  <img className={'image'}
                          src={image.src}
                          alt={image.alt}
            /> : null
        }

    </div>
);

export {AboutContent};
