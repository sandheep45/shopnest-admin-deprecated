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
import Loader from "@src/components/common/Loader";

interface IOption {
  name: string;
  values: string;
}
interface IProduct extends Product {
  variant: Variant;
  variantMetaData: MetaData;
  productMetaData: MetaData;
  customerReview: CustomerReview;
  VariantOption: IOption[];
}

const AddProduct = () => {
  const utils = api.useContext();
  const { uploadImage, isImageLoading } = useUploadFileToCloudinary();
  const methods = useForm<IProduct>();
  const { mutate, isLoading } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAllProducts.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    const image = await uploadImage({
      contentType: "image",
      file: data.image.url,
      public_id: `shopnest/${data.name}`,
    });
    console.log(data);
    mutate({
      categoryId: data.categoryId,
      description: data.description,
      image: {
        alt: "product image",
        url: image.secure_url,
        height: image.height,
        width: image.width,
      },
      name: data.name,
      tags: data.tags,
      option: data.VariantOption,
      taxPercent: data.taxPercent,
      metaData: data.productMetaData,
      status: data.status,
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
        {(isLoading || isImageLoading) && <Loader />}
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
