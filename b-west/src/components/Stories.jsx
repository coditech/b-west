import React from "react";
import '../styles/Stories.css'
const Stories = ({ story }) => {
  return (
  <div> 
    <section className="padding-top-50 padding-bottom-80">
            <div className="container">
    <div className="intro-5 margin-top-20">
      <div className="row">
        <div className="col-md-6">
            <div className="heading-block no-margin-bottom margin-top-0"> <span className="margin-bottom-15 margin-top-20">{story.firstStory.slogan}</span>
            <h2 className="margin-bottom-20 margin-top-1">{story.firstStory.title}</h2>
          </div>
          <p>{story.firstStory.desc}</p>
          <a href="#." className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ MORE</a> </div>

        <div className="col-md-6"> <img className="img-responsive" src={story.firstStory.image} alt={story.firstStory.alt}></img> </div>
        </div>
      </div>

      
    <div className="intro-5 margin-top-20">
        <div className="row">

        
          <div className="col-md-6"> <img className="img-responsive" src={story.secondStory.image} alt={story.secondStory.alt}></img> </div>
          <div className="col-md-6">
            <div className="heading-block no-margin-bottom margin-top-0"> <span className="margin-bottom-15">{story.secondStory.slogan}</span>
              <h2 className="margin-bottom-20 margin-top-1">{story.secondStory.title}</h2>
              </div>
                <p>{story.secondStory.desc}</p>
                <a href="#." className="btn btn-large dark-border font-normal margin-top-50 letter-space-1">READ MORE</a> </div>
          </div>
        </div>
      </div>
      
      </section>
      <section className={'promo dark'} style={{textAlign: "center"}}>
        <div className="container text-center">
         <a href="#." className="btn btn-color btn-med">Read More</a>
        </div>
      </section>
      </div>
      
  );
};

export default Stories;
