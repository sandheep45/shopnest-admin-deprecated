import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const { productId } = useRouter().query;
  return (
    <>
      <Head>
        <title>View/Edit a Product</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Product {productId}</div>;
    </>
  );
};

export default Product;
