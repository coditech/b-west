import React from "react";
import "../styles/Contactinfo.css";

const ContactInfo = ({ title, content }) => {


  return (
    <div className="titleContact margin-top-80 margin-bottom-80 contact"  >
      <h2 className="about-title">{title} </h2>

      <div className="infoContact"  dangerouslySetInnerHTML={{ __html: content }} />
        <a>
            <i style={{ fontSize: "40px", paddingRight: '10px' }} className={'fa fa-instagram '}
            />
        </a>
      <a>
        <i style={{ fontSize: "40px" }}
          className={'fa fa-facebook-official '}
        />
      </a>

    </div>
  );
};

export { ContactInfo };


