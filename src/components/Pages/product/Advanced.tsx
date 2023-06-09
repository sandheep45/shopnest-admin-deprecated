import Card from "@src/components/common/Card";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IAdvanceProps {
  isCurrentTab?: boolean;
}

const Advanced: React.FC<IAdvanceProps> = ({ isCurrentTab }) => {
  const { register } = useFormContext();
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
          {...register("sku")}
          descriptionTag="Enter the product SKU."
          label="SKU"
          id="sku"
        />

        <Input
          {...register("barcode")}
          descriptionTag="Enter the product barcode number."
          label="Barcode"
          id="barcode"
        />

        <div className="flex w-full items-center gap-3">
          <Input
            {...register("quantity")}
            id="quantity"
            descriptionTag="Enter the product quantity."
            className="flex-1"
            label="Quantity"
          />
          <Input
            {...register("ware-house")}
            label="Ware house"
            id="ware-house"
            hideLabel
            className="flex-1"
          />
        </div>
      </Card>

      {/* variants */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Varinats</h3>

        <div className="flex w-full items-end gap-4">
          <Input
            {...register("add-variants")}
            label="Add Product Variations"
            id="add-variants"
          />
          <Input
            {...register("variantion")}
            label="Variation"
            hideLabel
            id="variantion"
          />
        </div>
      </Card>

      {/* shipping */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Shipping</h3>

        <Input
          {...register("weight")}
          descriptionTag="Set a product weight in kilograms (kg)."
          label="Weight"
          id="weight"
        />

        <div className="flex w-full flex-col gap-3">
          <h4 className="text-sm font-semibold">Dimention</h4>
          <div className="flex w-full items-start gap-3">
            <Input
              {...register("width")}
              descriptionTag="Enter the product dimensions(cm)."
              className="flex-1"
              id="width"
              label="Width"
              hideLabel
            />
            <Input
              {...register("height")}
              label="Height"
              hideLabel
              id="height"
              className="flex-1"
            />
            <Input
              {...register("length")}
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
        <h3 className="text-xl font-semibold">General</h3>

        <Input
          {...register("meta-tag-title")}
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="meta-tag-title"
        />

        <TextArea
          {...register("meta-tag-description")}
          descriptionTag="Set a description to the product for better visibility."
          lable="Meta Tag Description"
          id="meta-tag-description"
        />

        <Input
          {...register("meta-tag-keywords")}
          descriptionTag="Set a list of keywords that the product is related to. Separate the keywords by adding a comma , between each keyword."
          label="Meta Tag Keywords"
          id="meta-tag-keywords"
        />
      </Card>
    </div>
  );
};

export default Advanced;
