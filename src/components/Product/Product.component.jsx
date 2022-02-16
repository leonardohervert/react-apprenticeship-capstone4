import React from "react";
import "./Product.styles.css";

const Product = ({ item }) => {
  console.log(item);
  const { data } = item;
  const { category, mainimage } = data;
  return (
    <div className="product-container">
      <img className="product-img" alt={mainimage.alt} src={mainimage.url} />
      <div className="product-description">
        <p>{data.name}</p>
        <div className="product-price">${data.price}</div>
      </div>
      <div className="product-category">{category.slug}</div>
    </div>
  );
};

export default Product;
