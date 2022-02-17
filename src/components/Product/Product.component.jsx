import React from "react";
import "./Product.styles.css";
import Image from "../Image";

const Product = ({ item }) => {
  const { data } = item;
  const { category, mainimage } = data;
  console.log(item);
  return (
    <div className="product-container">
      <Image className="product-img" alt={mainimage.alt} src={mainimage.url} />
      <div className="product-description">
        <p className="product-text">{data.name}</p>
        <p className="product-price">${data.price}</p>
      </div>
      <div className="product-category">{category.slug}</div>
    </div>
  );
};

export default Product;
