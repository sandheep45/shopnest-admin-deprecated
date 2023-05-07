import { type Prisma } from "@prisma/client";
import LeftSection from "@src/components/Pages/product/LeftSection";
import RightSection from "@src/components/Pages/product/RightSection";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Product = () => {
  const { productId } = useRouter().query;
  const methods = useForm<Prisma.ProductUpdateInput>();

  if (!productId) return null;

  return (
    <>
      <Head>
        <title>View/Edit a Product</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormProvider {...methods}>
        <div className="item-center flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start">
          {/* left section */}
          <LeftSection />

          {/* right section */}
          <RightSection />
        </div>
      </FormProvider>
    </>
  );
};

export default Product;
