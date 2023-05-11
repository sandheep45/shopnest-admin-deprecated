import LeftSection from "@src/components/Pages/product/LeftSection";
import RightSection from "@src/components/Pages/product/RightSection";
import Loader from "@src/components/common/Loader";
import { api } from "@src/utils/api";
import { type TProduct } from "@src/utils/types";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Product = () => {
  const { productId } = useRouter().query;
  const methods = useForm<TProduct>();
  const { isLoading, isFetching } = api.product.getProduct.useQuery(
    productId as string,
    {
      onSuccess: (data) => {
        methods.reset({
          name: data?.name,
          description: data?.description,
          price: data?.price,
        });
      },
    }
  );

  return (
    <>
      <Head>
        <title>View/Edit a Product</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormProvider {...methods}>
        <div className="item-center relative flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start">
          {(isLoading || isFetching) && (
            <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center backdrop-blur-sm">
              <Loader className=" h-20 w-20" />
            </div>
          )}
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
