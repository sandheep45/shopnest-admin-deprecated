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
  customerReview: CustomerReview;
}

const General: React.FC<IGeneratProps> = ({ isCurrentTab, statusOption }) => {
  const { register } = useFormContext<IProduct>();
  return (
    <div
      className={`flex w-full flex-1 flex-col gap-6 transition-all duration-300 ${
        isCurrentTab
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
            {...register("variant.image.alt")}
            descriptionTag="Set the product tax class."
            className="flex-1"
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
    </div>
  );
};

export default General;
