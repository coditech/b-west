import React from "react";
import {NavLink} from "react-router-dom";
import LazyLoad from "react-lazyload";
import "../styles/Store.css";

const Product = (props) => {
    const {status, slug, name, price, imageSrc, imageAlt, classContainer} = props;
    return (
        <li className={classContainer}>
            <div className="items-in">
                {status ? <div className="shop-tags">{status}</div> : ""}
                <NavLink to={'/products/' + slug}>
                    <LazyLoad height={200} offset={100}>

                        <img src={imageSrc} alt={imageAlt}/>
                    </LazyLoad>

                </NavLink>
            </div>
            <div className="details-sec">
                <a href={'/products/' + slug}> {name} </a>
                <span className="font-crimson font-italic font-18px">$ {price}</span>
            </div>
        </li>
    );
};

export default Product;
