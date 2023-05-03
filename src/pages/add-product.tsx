import Image from "next/image";
import React, { useMemo, useState } from "react";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import { useThemeContext } from "@src/context/ThemeContextProvider";
import { productStatusOptions } from "@src/utils/constants";
import { CiEdit } from "react-icons/ci";
import Tagify from "@src/components/common/Tagify";

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

          <div className="relative w-full">
            <DropDown list={statusOption} />
            <span className="text-sm dark:text-gray-500">
              Set the product status.
            </span>
          </div>
        </Card>

        {/* Deatils card */}
        <Card className="flex-col gap-5 pb-10 pt-8">
          <h3 className="text-xl font-semibold">Product Details</h3>

          <div className="flex w-full flex-col justify-between gap-1">
            <h6>Categories</h6>
            <DropDown list={statusOption} />
            <span className="text-sm dark:text-gray-500">
              Add product to a category.
            </span>
          </div>

          <div className="flex w-full flex-col justify-between gap-1">
            <h6>Tags</h6>
            <Tagify tags={[]} />
            <span className="text-sm dark:text-gray-500">
              Add tags to a category.
            </span>
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

          <div className="relative w-full">
            <DropDown list={statusOption} />
            <span className="text-sm dark:text-gray-500">
              Assign a template from your current theme to define how a single
              product is displayed.
            </span>
          </div>
        </Card>
      </div>

      {/* right section */}
      <div className="flex-1"></div>
    </div>
  );
};

export default AddProduct;
