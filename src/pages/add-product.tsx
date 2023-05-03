import Image from "next/image";
import React, { useMemo } from "react";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import { productStatusOptions } from "@src/utils/constants";
import { CiEdit } from "react-icons/ci";
import { IoCloudUpload } from "react-icons/io5";
import Tagify from "@src/components/common/Tagify";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";

const AddProduct = () => {
  const { isDarkTheme } = useThemeContext();
  const statusOption = useMemo(() => productStatusOptions, []);

  return (
    <div className="item-center flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start">
      {/* left section */}
      <div className="flex w-full flex-col gap-6 md:w-72">
        {/* thumbnail card */}
        <Card className="flex-col gap-6 p-7">
          <h3 className="text-2xl font-semibold">Thumbnail</h3>
          <div className="relative w-full">
            <button className="absolute -top-5 right-5 rounded-full bg-gray-100 p-3 text-gray-900 shadow-md dark:bg-gray-700 dark:text-gray-300">
              <CiEdit className="scale-125 " />
            </button>
            <Image
              className="mx-auto rounded-md shadow-2xl"
              src={`${
                isDarkTheme
                  ? "/svg/blank-image-dark.svg"
                  : "/svg/blank-image.svg"
              }`}
              alt="upload-thumbnail"
              height={150}
              width={150}
            />
          </div>
          <span className="px-2 text-center text-sm dark:text-gray-500">
            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image
            files are accepted
          </span>
        </Card>

        {/* status card */}
        <Card className="flex-col gap-4 py-8">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-xl font-semibold">Status</h3>
            <div className="h-4 w-4 rounded-full bg-green-700" />
          </div>

          <DropDown
            descriptionTag="Set the product status."
            list={statusOption}
          />
        </Card>

        {/* Deatils card */}
        <Card className="flex-col gap-5 pb-10 pt-8">
          <h3 className="text-xl font-semibold">Product Details</h3>

          <div className="flex w-full flex-col justify-between gap-1">
            <h6>Categories</h6>
            <DropDown
              descriptionTag="Add product to a category."
              list={statusOption}
            />
          </div>

          <div className="flex w-full flex-col justify-between gap-1">
            <h6>Tags</h6>
            <Tagify descriptionTag="Add tags to a category." tags={[]} />
          </div>
        </Card>

        {/* weekly sales */}
        <Card className="flex-col gap-4 pb-12 pt-8">
          <h3 className="text-xl font-semibold">Weekly Sales</h3>

          <div className="relative w-full">
            <span className="text-sm dark:text-gray-500">
              No data available. Sales data will begin capturing once product
              has been published.
            </span>
          </div>
        </Card>

        {/* template card */}
        <Card className="flex-col gap-4 pb-12 pt-8">
          <h3 className="text-xl font-semibold">Product Template</h3>

          <DropDown
            descriptionTag="Assign a template from your current theme to define how a single
              product is displayed."
            list={statusOption}
          />
        </Card>
      </div>

      {/* right section */}
      <div className="flex flex-1 flex-col gap-10">
        {/* tabs */}
        <div className="flex gap-5">
          <span className="text-lg text-blue-600 underline underline-offset-[16px]">
            General
          </span>
          <span className="text-lg text-gray-500">Advanced</span>
        </div>

        <div className="flex w-full flex-col gap-6">
          {/* general */}
          <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
            <h3 className="text-xl font-semibold">General</h3>

            <Input
              descriptionTag="A product name is required and recommended to be unique."
              label="Product Name"
              id="product-name"
            />

            <TextArea
              descriptionTag="Set a description to the product for better visibility."
              lable="Description"
              id="description"
            />
          </Card>

          {/* media */}
          <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
            <h3 className="text-xl font-semibold">Media</h3>

            <div className="flex w-full items-center gap-10 rounded-md border border-dashed border-blue-500 bg-blue-500/10 px-10 py-7">
              <IoCloudUpload className="scale-[2] text-blue-500/60" />
              <div className="flex flex-col">
                <h6 className="text-lg font-semibold ">
                  Drop files here or click to upload.
                </h6>
                <span className="text-sm dark:text-gray-500">
                  Upload up to 10 images. Only *.png, *.jpg and *.jpeg image
                </span>
              </div>
            </div>
          </Card>

          {/* pricing */}
          <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
            <h3 className="text-xl font-semibold">Pricing</h3>

            <Input
              descriptionTag="Base price is the original price of the product."
              label="Base Price"
              id="price"
            />

            <div className="relative flex w-full flex-col gap-2">
              <span>Discount Price</span>
              <div className="flex w-full gap-7">
                <div className="flex-1 rounded-md border border-dashed border-blue-500 bg-blue-500/10 p-5 ">
                  No Discount
                </div>
                <div className="flex-1 rounded-md border border-dashed border-blue-500 bg-blue-500/10 p-5 ">
                  Percentage %
                </div>
                <div className="flex-1 rounded-md border border-dashed border-blue-500 bg-blue-500/10 p-5 ">
                  Fixed Price
                </div>
              </div>
            </div>

            <div className="flex w-full gap-7">
              <DropDown
                descriptionTag="Set the product tax class."
                className="flex-1"
                label="Tax Class"
                list={statusOption}
              />
              <Input
                descriptionTag="Set the product VAT about."
                className="flex-1"
                label="VAT Amount (%)"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
