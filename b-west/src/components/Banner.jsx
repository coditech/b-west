import React from "react";

const Banner = ({ banner }) => {
  const style = {
    background: "url('"+banner.image +"') fixed no-repeat"
  }

  return (
    <div id="content">
      <section className="sub-banner" style={style}>
        <div className="container">
          <div className="position-center-center">
            <h2>{banner.title}</h2>

            <h4 className="white-text margin-top-20">{banner.subtitle}</h4>
          </div>
        </div>
      </section>
  </div>
    );
};

export default Banner;