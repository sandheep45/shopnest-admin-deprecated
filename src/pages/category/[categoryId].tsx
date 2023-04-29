import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const { categoryId } = useRouter().query;
  return <div>Category {categoryId}</div>;
};

export default Category;
