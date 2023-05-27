import React, { type Dispatch, type SetStateAction } from "react";
import Card from "@src/components/common/Card";
import Input from "@src/components/common/Input";
import GeneralCard from "../global/GeneralCard";
import { useFormContext } from "react-hook-form";
import TextArea from "@src/components/common/TextArea";
import useRadioGroupInput from "@src/hooks/useRadioGroupInput";
import { type MetaData, type Category, type Status } from "@prisma/client";

interface ICategory extends Category {
  categoryStoreTemplate: Status;
  categoryMetaData: MetaData;
}

const options = [
  {
    label: "Manual",
    descriptionTag:
      "Add products to this category one by one by manually selecting this category during product creation or update.",
  },
  {
    label: "Automatic",
    descriptionTag:
      "Products matched with the following conditions will be automatically assigned to this category.",
  },
];

const conditionRadioList = ["All Conditions", "Any Conditions"] as const;

const General = () => {
  const [RadioGroup, selectedOption, setSelectedOption] = useRadioGroupInput({
    options: options,
  });

  const { register } = useFormContext<ICategory>();

  return (
    <div
      className={`flex w-full flex-1 flex-col gap-6 transition-all duration-300`}
    >
      <GeneralCard />

      {/* Meta Options */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Meta Options</h3>

        <Input
          {...register("categoryMetaData.title")}
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="metaTagTitle"
        />
        <TextArea
          {...register("categoryMetaData.description")}
          lable="Meta Tag Description"
          descriptionTag="Set a meta tag description to the category for increased SEO ranking."
          id="metaTagDescription"
        />
        <Input
          {...register("categoryMetaData.keywords")}
          descriptionTag="Set a list of keywords that the category is related to. Separate the keywords by adding a comma , between each keyword."
          label="Meta Tag Keywords"
          id="metaTagKeywords"
        />
      </Card>

      {/* Automation */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Automation</h3>
        <RadioGroup />
        {selectedOption === "Automatic" && <div>condition</div>}
      </Card>
    </div>
  );
};

export default General;
