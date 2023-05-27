import React from "react";
import Head from "next/head";
import { api } from "@src/utils/api";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import LeftSection from "@src/components/Pages/product/LeftSection";
import RightSection from "@src/components/Pages/product/RightSection";
import useUploadFileToCloudinary from "@src/hooks/api/useUploadFileToCloudinary";
import type {
  Variant,
  Product,
  MetaData,
  CustomerReview,
} from "@prisma/client";

interface IProduct extends Product {
  variant: Variant;
  variantMetaData: MetaData;
  productMetaData: MetaData;
  customerReview: CustomerReview;
}

const AddProduct = () => {
  const utils = api.useContext();
  const { uploadImage } = useUploadFileToCloudinary();
  const methods = useForm<IProduct>();
  const { mutate } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAllProducts.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    if (!data.categoryId) return;
    // const image = await uploadImage({
    //   contentType: "image",
    //   file: data.image.url,
    //   public_id: "product",
    // });
    mutate({
      categoryId: data.categoryId,
      description: data.description,
      image: {
        alt: "image.original_filename",
        url: "https://res.cloudinary.com/dsvm26gtf/image/upload/v1685169216/product.png",
        height: 100,
        width: 100,
      },
      name: data.name,
      tags: data.tags,
      taxPercent: 100,
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
          className="item-center flex flex-col justify-center gap-8 p-4 transition-all duration-300 sm:flex-row sm:items-start sm:p-8"
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
