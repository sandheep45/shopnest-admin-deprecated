import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import React from "react";
import { IoCloudUpload } from "react-icons/io5";

interface IGeneratProps {
  className?: string;
  isCurrentTab?: boolean;
  statusOption: {
    name: string;
    value: string;
  }[];
}

const General: React.FC<IGeneratProps> = ({ statusOption, isCurrentTab }) => {
  return (
    <div
      className={`flex w-full flex-1 flex-col gap-6 transition-all duration-300 ${
        isCurrentTab
          ? ""
          : "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden opacity-0"
      }`}
    >
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
  );
};

export default General;
