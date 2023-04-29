import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const { productId } = useRouter().query;
  return <div>Product {productId}</div>;
};

export default Product;
