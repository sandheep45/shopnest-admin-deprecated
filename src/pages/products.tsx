import type { Product, Variant, Category } from "@prisma/client";
import Button from "@src/components/common/Button";
import Card from "@src/components/common/Card";
import Loader from "@src/components/common/Loader";
import Table from "@src/components/common/Table";
import useGetAllProduct from "@src/hooks/api/useGetAllProduct";
import { createColumnHelper } from "@tanstack/react-table";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      id: row.id,
    }),
    {
      id: "product",
      header: () => <span className="text-left">Product</span>,
      cell: (info) => (
        <Link
          href={`/product/${info.getValue().id}`}
          className="flex items-center gap-3"
        >
          <Image
            className="h-10 w-10 rounded-full"
            alt={info.getValue().image.alt}
            src={`/images/logo.png`}
            height={info.getValue().image.height}
            width={info.getValue().image.width}
          />
          <span>{info.getValue().name}</span>
        </Link>
      ),
    }
  ),
  columnHelper.accessor("Category", {
    header: () => <span className="text-left">Category</span>,
    cell: (info) => <span className="">{info.getValue()?.name}</span>,
  }),
  columnHelper.accessor("Variant", {
    header: () => <span className="">Variant</span>,
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
      <span className="flex items-center">{info.getValue().length}</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: () => <span className="">Status</span>,
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

const Products: NextPage = () => {
  const { data, isLoading, isFetching } = useGetAllProduct({
    limit: 10,
    offset: 0,
  });

  return (
    <>
      <Head>
        <title>View All Products</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex w-full grow flex-col gap-6 px-5 py-6 transition-all duration-300`}
      >
        <Card className="h-screen w-full flex-col gap-5 px-8 pb-12 pt-8">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-2xl font-semibold">All Products</h2>
            <Link href={`/add-product`}>Add Product</Link>
          </div>
          {(isLoading || isFetching) && (
            <div className="flex h-full items-center justify-center">
              <Loader className="h-20 w-20" />
            </div>
          )}
          {data && !isLoading && !isFetching && (
            <Table
              className="w-full table-auto"
              tableHeaderCellClassName="dark:text-gray-700 py-3 px-4"
              tableHeaderClassName="text-left"
              tableBodyCellClassName="border-t border-dashed dark:border-gray-400 border-gray-500 py-3 px-4"
              columns={columns}
              data={data}
            />
          )}
        </Card>
      </div>
    </>
  );
};

export default Products;
