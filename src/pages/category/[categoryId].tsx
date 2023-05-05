import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const { categoryId } = useRouter().query;
  return (
    <>
      <Head>
        <title>View/Edit a Category</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Category {categoryId}</div>;
    </>
  );
};

export default Category;
