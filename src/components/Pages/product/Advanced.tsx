import type {
  CustomerReview,
  MetaData,
  Product,
  Variant,
} from "@prisma/client";
import Button from "@src/components/common/Button";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import { useRouter } from "next/router";
import React from "react";
import { useFormContext } from "react-hook-form";
import { IoCloudUpload } from "react-icons/io5";

interface IAdvanceProps {
  isCurrentTab?: boolean;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
  statusOption: {
    name: string;
    value: string;
  }[];
}

interface IProduct extends Product {
  variant: Variant;
  variantMetaData: MetaData;
  customerReview: CustomerReview;
}

const Advanced: React.FC<IAdvanceProps> = ({
  isCurrentTab,
  statusOption,
  setCurrentTabIndex,
}) => {
  const { productId } = useRouter().query;
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

      {/* pricing */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Pricing</h3>

        <Input
          {...register("variant.price")}
          descriptionTag="Base price is the original price of the product."
          label="Base Price"
          id="price"
        />

        <div className="relative flex w-full flex-col gap-2">
          <span>Discount Price</span>
          <div className="flex w-full flex-wrap gap-7">
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

        <div className="flex w-full flex-wrap gap-7">
          <DropDown
            aria-label="tax-class"
            {...register("variant.image.alt")}
            descriptionTag="Set the product tax class."
            label="Tax Class"
            list={statusOption}
          />
          <Input
            {...register("variant.image.width")}
            id="vat"
            descriptionTag="Set the product VAT about."
            className="flex-1"
            label="VAT Amount (%)"
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
        <h3 className="text-xl font-semibold">Meta Options for Varinat</h3>

        <Input
          {...register("variantMetaData.title")}
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="meta-tag-title"
        />

        <TextArea
          {...register("variantMetaData.description")}
          descriptionTag="Set a description to the product for better visibility."
          lable="Meta Tag Description"
          id="meta-tag-description"
        />

        <Input
          {...register("variantMetaData.keywords")}
          descriptionTag="Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword."
          label="Meta Tag Keywords"
          id="meta-tag-keywords"
        />
      </Card>
      <div className="flex w-full justify-end gap-4">
        <Button
          onClick={() => setCurrentTabIndex(0)}
          className="w-fit rounded-md bg-gray-300 px-6 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
          type="button"
        >
          Cancel
        </Button>
        <Button
          className="w-fit rounded-md bg-[#0095e8] px-6 py-2 text-white"
          type="button"
        >
          Save {productId ? "Changes" : "Product"}
        </Button>
      </div>
    </div>
  );
};

export default Advanced;
