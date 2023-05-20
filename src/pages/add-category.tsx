import Head from "next/head";
import React from "react";

import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import LeftSection from "@src/components/Pages/category/LeftSection";
import RightSection from "@src/components/Pages/category/RightSection";

import type { Category, MetaData, Status, } from '@prisma/client'
import useUploadFileToCloudinary from "@src/hooks/api/useUploadFileToCloudinary";
import { api } from "@src/utils/api";

interface ICategory extends Category {
  categoryStoreTemplate: Status;
  categoryMetaData: MetaData
}


const AddCategory = () => {
  const methods = useForm<ICategory>();
  const { uploadImage } = useUploadFileToCloudinary();

  const utils = api.useContext();
  const { mutate } = api.category.createCategory.useMutation({
    onSuccess: async () => {
      await utils.category.getAllCategory.invalidate();
    },
  });

  // const onSubmit: SubmitHandler<ICategory> = async (data) => {
  const onSubmit: SubmitHandler<ICategory> = (data) => {
    console.log("category info :", data)
    // const image = await uploadImage({
    //   contentType: "image",
    //   file: data.image.url,
    //   public_id: "category"
    // });

    // mutate({
    //   name: data.name,
    //   description: data.description,
    //   image: {
    //     alt: image.original_filename,
    //     url: image.secure_url,
    //     height: image.height,
    //     width: image.width,
    //   },
    //   status: data.status,
    //   categoryMetaData: data.categoryMetaData,
    // })

  }
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
