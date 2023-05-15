import Head from "next/head";
import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import LeftSection from "@src/components/Pages/category/LeftSection";
import RightSection from "@src/components/Pages/category/RightSection";

const AddCategory = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
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
        </form>
      </FormProvider>
    </>
  );
};

export default AddCategory;
