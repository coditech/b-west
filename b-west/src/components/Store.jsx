import React from "react";
import "../styles/Store.css";
import Product from "./Product";

const Store = ({featuredProducts}) => {
    return (
        <div className="container">
            <div className="popurlar_product">
                <ul className="row">
                    {featuredProducts.map(
                        (storeItem, n) =>
                            n < 3 ? (
                                <Product
                                    name={storeItem.name}
                                    url={storeItem.productUrl}
                                    imageSrc={storeItem.imageSrc}
                                    imageAlt={storeItem.imageAlt}
                                    price={storeItem.price}
                                    status={storeItem.status}
                                    slug={storeItem.slug}
                                    classContainer={"col-xs-4"}
                                    key={n}
                                />
                            ) : null
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Store;
