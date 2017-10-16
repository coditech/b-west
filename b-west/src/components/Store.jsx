import React from "react";
import "../styles/Store.css";
import Product from "./Product";

const dataTest = [
    {
        image: {
            src: "/product_1.jpg",
            alt: "img1"
        },
        name: "Rose Jam",
        price: "$79.00",
        productUrl: "/url1",
        status: "NEW"
    },
    {
        image: {
            src: "/product_2.jpg",
            alt: "img2"
        },
        name: "JACQUARD FLORAL COAT",
        price: "$100.00",
        productUrl: "/url2",
        status: ""
    },
    {
        image: {
            src: "/product_3.jpg",
            alt: "img3"
        },
        name: "LONG CHECKED OVERSHIRT",
        price: "$700.00",
        productUrl: "/url3",
        status: "OLD"
    }
];

const Store = () => {
    return (
        <div className="container">
            <div className="popurlar_product">
                <ul className="row">
                    {dataTest.map(
                        (storeItem, n) =>
                            n < 3 ? (
                                <Product
                                    name={storeItem.name}
                                    url={storeItem.productUrl}
                                    image={storeItem.image}
                                    price={storeItem.price}
                                    status={storeItem.status}
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
