import React from "react";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import GeneralCard from "../global/GeneralCard";
import { useFormContext } from "react-hook-form";
import type {
  Variant,
  Product,
  MetaData,
  CustomerReview,
} from "@prisma/client";
import TextArea from "@src/components/common/TextArea";

interface IGeneratProps {
  className?: string;
  isCurrentTab?: boolean;
  statusOption: {
    name: string;
    value: string;
  }[];
}

interface IProduct extends Product {
  variant: Variant;
  metaData: MetaData;
  productMetaData: MetaData;
  customerReview: CustomerReview;
}

const General: React.FC<IGeneratProps> = ({ isCurrentTab, statusOption }) => {
  const { register } = useFormContext<IProduct>();
  return (
    <div
      className={`flex w-full flex-1 flex-col gap-6 transition-all duration-300 ${isCurrentTab
        ? ""
        : "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden opacity-0"
        }`}
    >
      <GeneralCard />

      {/* variants */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Variants</h3>

        <div className="flex w-full flex-wrap items-end gap-4">
          <Input
            {...register("variant.name")}
            label="Add Product Variations"
            id="add-variants"
          />
          <Input
            {...register("variant.quantity")}
            label="Variation"
            hideLabel
            id="variantion"
          />
        </div>
      </Card>

      {/* meta option */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Meta Options for Product</h3>

        <Input
          {...register("productMetaData.title")}
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="meta-tag-title"
        />

        <TextArea
          {...register("productMetaData.description")}
          descriptionTag="Set a description to the product for better visibility."
          lable="Meta Tag Description"
          id="meta-tag-description"
        />

        <Input
          {...register("productMetaData.keywords")}
          descriptionTag="Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword."
          label="Meta Tag Keywords"
          id="meta-tag-keywords"
        />
      </Card>
    </div>
  );
};

export default General;
