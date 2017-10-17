import React from "react";
import "./components/styles/Contactinfo.css";

const Contactinfo = ({ title, content }) => {


  return (
    <div class="titleContact"  >
      <h2 class="about-title">{title} </h2>

      <div class="infoContact"  dangerouslySetInnerHTML={{ __html: content }} />
      <a>
        <i style={{ fontSize: "30px" }}
          className={'fa fa-facebook-official '}
        />
      </a>
      <a>
        <i style={{ fontSize: "30px" }} className={'fa fa-facebook-official '}
        />
      </a>
    </div>
  );
};

export { Contactinfo };


