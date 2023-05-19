import Head from "next/head";
import React from "react";

import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import LeftSection from "@src/components/Pages/category/LeftSection";
import RightSection from "@src/components/Pages/category/RightSection";

import type { Category, MetaData, Status, } from '@prisma/client'

interface ICategory extends Category {
  categoryStoreTemplate: Status;
  categoryMetaData: MetaData
}


const AddCategory = () => {
  const methods = useForm<ICategory>();
  const onSubmit: SubmitHandler<ICategory> = (data) => console.log("category info :", data);
  return (
    <>
      <Head>
        <title>Add Categories page</title>
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
          <button className="bg-gray-500 text-white rounded-lg p-2 flex absolute" type="submit">Submit Category</button>
        </form>
      </FormProvider>
    </>
  );
};

export default AddCategory;
