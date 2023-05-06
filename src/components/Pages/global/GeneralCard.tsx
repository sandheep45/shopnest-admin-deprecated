import Card from "@src/components/common/Card";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/TextArea";
import React from "react";

const GeneralCard = () => {
  return (
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
  );
};

export default GeneralCard;
