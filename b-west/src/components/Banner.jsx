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
            <h2><i className={'fa fa-instagram'} style={{fontSize: '2rem', display: 'block'}}/>@b-west</h2>

            <h4 className="white-text margin-top-20">{banner.subtitle}</h4>
          </div>
        </div>
      </section>
  </div>
    );
};
//
// <section className="facts style-4 padding-top-90 padding-bottom-90"
//          style={{background: '#f4f4f4'}}>
//   <div className="container-fluid">
//     <div className="row counter">
//         {/* Facts */}
//       <div className="col-md-12">
//           {/* Icon */}
//         <i className={'fa fa-instagram'} style={{width: '100px'}}/>
//         <div className="c-style-7 c-text-white"><span className="number"> <span
//             className="timer" data-speed={2000} data-refresh-interval={100} data-to={35}
//             data-from={0}>35</span> </span>
//           <h5>Team Member</h5>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
export default Banner;