import React, { useState, useEffect } from "react";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import Product from "../Product";
import "./Products.styles.css";

const Products = () => {
  const { data, isLoading } = useFeaturedProducts();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(isLoading);
    if (!isLoading) {
      setProducts(data?.results);
    }
  }, [isLoading, data]);
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="products-container">
      <div className="products">
        {!isLoading &&
          products &&
          products.map((x) => {
            return <Product key={x.id} item={x} />;
          })}
      </div>
    </div>
  );
};

export default Products;
