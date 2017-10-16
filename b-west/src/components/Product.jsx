import React from "react";
import "../styles/Store.css";

const Product = ({ status, productUrl, name, price, image, classContainer}) => {
  return (
    <li className={classContainer}>
      <div className="items-in">
        {status ? <div className="shop-tags">{status}</div> : ""}
        <a href={productUrl}>
          <img src={image.src} alt={image.url} />
        </a>
      </div>
      <div className="details-sec">
        <a href={productUrl}> {name} </a>
        <span className="font-crimson font-italic font-18px">{price}</span>
      </div>
    </li>
  );
};

export default Product;
