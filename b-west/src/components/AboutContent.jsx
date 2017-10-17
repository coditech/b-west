import React from "react";
import "./components/styles/AboutContent.css";


const AboutContent = ({ title, content }) => {
  return (
    <div>
      <div class="all-body">
        <h2 class="about-title">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div>
        <section className="image-section">
          <img src={"http://au-kbc.org/ctm/slide/img31.jpg"} />
        </section>
      </div>
    </div>
  );
};
export {AboutContent}