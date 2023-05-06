import type { Variant, Product, Category } from "@prisma/client";
import Button from "@src/components/common/Button";
import Card from "@src/components/common/Card";
import Table from "@src/components/common/Table";
import { api } from "@src/utils/api";
import { createColumnHelper } from "@tanstack/react-table";
import Head from "next/head";
import Image from "next/image";
import React from "react";

interface IProductData extends Product {
  Variant: Variant[];
  Category: Category | null;
}

const columnHelper = createColumnHelper<IProductData>();

const columns = [
  columnHelper.accessor("id", {
    header: () => (
      <span className="flex w-full items-center justify-center">
        <input className="h-5 w-5" type="checkbox" />
      </span>
    ),
    cell: () => (
      <span className="flex w-full items-center justify-center">
        <input className="h-5 w-5" type="checkbox" />
      </span>
    ),
  }),
  columnHelper.accessor(
    (row) => ({
      name: row.name,
      image: row.image,
    }),
    {
      id: "product",
      header: () => <span className="text-left">Product</span>,
      cell: (info) => (
        <span className="flex items-center justify-center gap-3">
          <Image
            className="h-10 w-10 rounded-full"
            alt={info.getValue().image.alt}
            src={`/images/logo.png`}
            height={info.getValue().image.height}
            width={info.getValue().image.width}
          />
          <span>{info.getValue().name}</span>
        </span>
      ),
    }
  ),
  columnHelper.accessor("Category", {
    header: () => <span className="text-left">Comment</span>,
    cell: (info) => <span className="">{info.getValue()?.name}</span>,
  }),
  columnHelper.accessor("Variant", {
    header: () => <span className="">Customer</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">{info.getValue().length}</span>
    ),
  }),
  columnHelper.accessor("price", {
    header: () => <span className="">Price</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("tags", {
    header: () => <span className="">Tags</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">{info.getValue().length}</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: () => <span className="">Customer</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("id", {
    header: () => <span className="">Action</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">
        <Button onPress={() => alert(info.getValue())}>Delete</Button>
      </span>
    ),
  }),
];

const Products = () => {
  const { data } = api.product.getAllProducts.useQuery({
    limit: 10,
    offset: 0,
  });

  if (!data) return null;
  return (
    <>
      <Head>
        <title>View All Products</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-8 transition-all duration-300 dark:text-gray-300 ">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold">All Products</h1>
        </div>
        <Card className="w-full">
          <Table
            className="w-full table-auto"
            tableHeaderCellClassName="dark:text-gray-700 py-3 px-4"
            tableHeaderClassName="text-left"
            tableBodyCellClassName="border-t border-dashed dark:border-gray-400 border-gray-500 py-3 px-4"
            columns={columns}
            data={data}
          />
        </Card>
      </div>
    </>
  );
};

export default Products;
