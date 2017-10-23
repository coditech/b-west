import React from "react";
import "../styles/AboutContent.css";

const AboutContent = ({title, content, imageSrc, imageAlt}) => (
    <div className={'section-container'}>
        <div className={"about-section"}>
            <h2 className={'title'}>{title}</h2>
            <div className="about-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {
            imageSrc ?  <img className={'image'}
                          src={imageSrc}
                          alt={imageAlt}
            /> : null
        }

    </div>
);

export {AboutContent};
