import React from "react";

const dataTest = [
  {
    image: {
      url: "/assets/images/shop/img-1.jpg",
      alt: "img1"
    },
    name: "SOFT RUCKSACK",
    price: "$79.00",
    productUrl: "/url1",
    status: "NEW"
  },
  {
    image: {
      url: "/assets/images/shop/img-2.jpg",
      alt: "img2"
    },
    name: "JACQUARD FLORAL COAT",
    price: "$100.00",
    productUrl: "/url2",
    status: ""
  },
  {
    image: {
      url: "/assets/images/shop/img-3.jpg",
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
          {dataTest.map((storeItem, index) => (
            <li className="col-sm-4" key={index}>
              <div className="items-in">
                {storeItem.status ? (
                  <div className="shop-tags">{storeItem.status}</div>
                ) : (
                  ""
                )}
                <a href={storeItem.productUrl}>
                  <img src={storeItem.image.url} alt={storeItem.image.url} />
                </a>
              </div>
              <div className="details-sec">
                <a href={storeItem.productUrl}> {storeItem.name} </a>
                <span className="font-crimson font-italic font-18px">
                  {storeItem.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Store;
