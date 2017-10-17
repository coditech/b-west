import React from "react";
import "../styles/Stories.css";
import { NavLink } from "react-router-dom";

const Stories = ({ firstStory, secondStory }) => {
  return (
    <div>
      <section className="padding-top-50 padding-bottom-80">
        <div className="container">
          <div className="intro-5 margin-top-20">
            <div className="row">
              <div className="col-md-6">
                <div className="heading-block no-margin-bottom margin-top-0">
                  <span className="margin-bottom-15 margin-top-20">
                    {firstStory.slogan}
                  </span>
                  <h2 className="margin-bottom-20 margin-top-1">
                    {firstStory.title}
                  </h2>
                </div>
                <p>{firstStory.desc}</p>
                <NavLink
                  to={"/villagers#" + firstStory.slug}
                  className={
                    "btn btn-large dark-border font-normal margin-top-35 letter-space-1 margin-bottom-50"
                  }
                >
                  READ&nbsp;MORE
                </NavLink>
              </div>

              <div className="col-md-6">
                <img
                  className="img-responsive"
                  src={firstStory.image}
                  alt={firstStory.alt}
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="intro-5 margin-top-20">
            <div className="row">
              <div className="col-md-6 hidden-xs hidden-sm">
                <img
                  className="img-responsive"
                  src={secondStory.image}
                  alt={secondStory.alt}
                />
              </div>
              <div className="col-md-6 ">
                <div className="heading-block no-margin-bottom margin-top-0">
                  <span className="margin-bottom-15">{secondStory.slogan}</span>
                  <h2 className="margin-bottom-20 margin-top-1">
                    {secondStory.title}
                  </h2>
                </div>
                <p>{secondStory.desc}</p>
                <NavLink
                  to={"/villagers#" + secondStory.slug}
                  className={
                    "btn btn-large dark-border font-normal margin-top-35 letter-space-1 margin-bottom-50"
                  }
                >
                  READ&nbsp;MORE
                </NavLink>
              </div>

              <div className="col-md-6 hidden-md hidden-lg">
                <img
                  className="img-responsive"
                  src={secondStory.image}
                  alt={secondStory.alt}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section
        className={"promo dark dark-pattern"}
        style={{ textAlign: "center" }}
      >
        <div className="container text-center">
          <NavLink to={"/villagers#wrap"} className={"btn btn-color btn-med"}>
            More Villagers Stories
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Stories;
