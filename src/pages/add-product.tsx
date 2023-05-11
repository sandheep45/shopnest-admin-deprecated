import React from "react";
import Head from "next/head";
import { api } from "@src/utils/api";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import LeftSection from "@src/components/Pages/product/LeftSection";
import RightSection from "@src/components/Pages/product/RightSection";
import useUploadFileToCloudinary from "@src/hooks/api/useUploadFileToCloudinary";
import type { TProduct } from "@src/utils/types";
import { imageToBase64 } from "@src/utils/convertImageToBlog";

const AddProduct = () => {
  const utils = api.useContext();
  const { uploadImage } = useUploadFileToCloudinary();
  const methods = useForm<TProduct>();
  const { mutate } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAllProducts.invalidate();
    },
  });

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const blob = await imageToBase64((data.image as FileList)[0] as File);
    const image = await uploadImage({
      contentType: "image",
      file: blob,
      public_id: "product",
    });
    mutate({
      categoryId: data.categoryId as string,
      description: data.description,
      image: {
        alt: image.original_filename,
        url: image.secure_url,
        height: image.height,
        width: image.width,
      },
      name: data.name,
      price: data.price,
      // tags: data.tags as string[],
    });
  };

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
