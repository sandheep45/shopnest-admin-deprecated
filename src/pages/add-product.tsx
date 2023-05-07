import React from "react";
import Head from "next/head";
import { api } from "@src/utils/api";
import { useForm, FormProvider } from "react-hook-form";
import { type Prisma } from "@prisma/client";
import LeftSection from "@src/components/Pages/product/LeftSection";
import RightSection from "@src/components/Pages/product/RightSection";

const AddProduct = () => {
  const utils = api.useContext();
  const methods = useForm<Prisma.ProductCreateInput>();
  const { mutate, isLoading } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAllProducts.invalidate();
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Head>
        <title>Add Product Page</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="item-center flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start"
        >
          {/* left section */}
          <LeftSection />

          {/* right section */}
          <RightSection />
        </form>
      </FormProvider>
    </>
  );
};

export default AddProduct;
