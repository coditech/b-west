import React from "react";
import "../styles/Store.css";
import {NavLink} from "react-router-dom";

const Product = ({status, slug, name, price, image, classContainer}) => {
    return (
        <li className={classContainer}>
            <div className="items-in">
                {status ? <div className="shop-tags">{status}</div> : ""}
                <NavLink to={'/products/' + slug}>
                    <img src={image.src} alt={image.url}/>
                </NavLink>
            </div>
            <div className="details-sec">
                <a href={'/products/' + slug}> {name} </a>
                <span className="font-crimson font-italic font-18px">{price}</span>
            </div>
        </li>
    );
};

export default Product;
