import type {
  CustomerReview,
  MetaData,
  Product,
  Variant,
} from "@prisma/client";
import Card from "@src/components/common/Card";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import React from "react";
import { useFormContext } from "react-hook-form";
import { IoCloudUpload } from "react-icons/io5";

interface IAdvanceProps {
  isCurrentTab?: boolean;
}

interface IProduct extends Product {
  variant: Variant;
  metaData: MetaData;
  customerReview: CustomerReview;
}

const Advanced: React.FC<IAdvanceProps> = ({ isCurrentTab }) => {
  const { register } = useFormContext<IProduct>();
  return (
    <div
      className={`flex w-full flex-col gap-6 transition-all duration-300 ${
        isCurrentTab
          ? ""
          : "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden opacity-0"
      }`}
    >
      {/* inventory */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Inventory</h3>

        <Input
          {...register("variant.sku")}
          descriptionTag="Enter the product SKU."
          label="SKU"
          id="sku"
        />

        <Input
          {...register("variant.barcode")}
          descriptionTag="Enter the product barcode number."
          label="Barcode"
          id="barcode"
        />

        <div className="flex w-full flex-wrap items-center gap-3">
          <Input
            {...register("variant.quantity")}
            id="quantity"
            descriptionTag="Enter the product quantity."
            className="flex-1"
            label="Quantity"
          />
          <Input
            {...register("variant.quantity.inWareHouse")}
            label="Ware house"
            id="ware-house"
            hideLabel
            className="flex-1"
          />
        </div>
      </Card>

      {/* media */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Media</h3>

        <div className="flex w-full flex-col items-center gap-10 rounded-md border border-dashed border-blue-500 bg-blue-500/10 px-2 py-10 sm:flex-row sm:px-10 sm:py-7">
          <IoCloudUpload className="scale-[4] text-blue-500/60 sm:scale-[2]" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold ">
              Drop files here or click to upload.
            </h2>
            <span className="text-sm dark:text-gray-500">
              Upload up to 10 images. Only *.png, *.jpg and *.jpeg image
            </span>
          </div>
        </div>
      </Card>

      {/* shipping */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Shipping</h3>

        <Input
          {...register("customerReview")}
          descriptionTag="Set a product weight in kilograms (kg)."
          label="Weight"
          id="weight"
        />

        <div className="flex w-full flex-col gap-3">
          <h4 className="text-sm font-semibold">Dimention</h4>
          <div className="flex w-full flex-wrap items-start gap-3">
            <Input
              {...register("variant")}
              descriptionTag="Enter the product dimensions(cm)."
              className="flex-1"
              id="width"
              label="Width"
              hideLabel
            />
            <Input
              {...register("variant")}
              label="Height"
              hideLabel
              id="height"
              className="flex-1"
            />
            <Input
              {...register("variant")}
              label="length"
              hideLabel
              id="length"
              className="flex-1"
            />
          </div>
        </div>
      </Card>

      {/* meta option */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Meta Options</h3>

        <Input
          {...register("metaData.title")}
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="meta-tag-title"
        />

        <TextArea
          {...register("metaData.description")}
          descriptionTag="Set a description to the product for better visibility."
          lable="Meta Tag Description"
          id="meta-tag-description"
        />

        <Input
          {...register("metaData.keywords")}
          descriptionTag="Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword."
          label="Meta Tag Keywords"
          id="meta-tag-keywords"
        />
      </Card>
    </div>
  );
};

export default Advanced;
