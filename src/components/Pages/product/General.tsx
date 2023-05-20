import React, { useMemo, useState } from "react";
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
import { api } from "@src/utils/api";
import Button from "@src/components/common/Button";
import { useRouter } from "next/router";
import Loader from "@src/components/common/Loader";
import { GiCancel } from "react-icons/gi";
import { IoAdd } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import { productVariantOptions } from "@src/utils/constants";
import { useToast } from "@src/context/ToastContextProvider";
interface IGeneratProps {
  className?: string;
  isCurrentTab?: boolean;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
  statusOption: {
    name: string;
    value: string;
  }[];
}

interface IOptions {
  name: string;
  values: string[];
}

interface IProduct extends Product {
  variant: Variant;
  metaData: MetaData;
  productMetaData: MetaData;
  customerReview: CustomerReview;
  VariantOption: IOptions[];
}

const General: React.FC<IGeneratProps> = ({
  isCurrentTab,
  setCurrentTabIndex,
}) => {
  const router = useRouter();
  const newOption = {
    name: "",
    value: "",
  };
  const [input, setInput] = useState([newOption]);
  const { register, setValue, watch } = useFormContext<IProduct>();
  const options = useMemo(() => productVariantOptions, []);
  const { addToast } = useToast();

  const handleAddOptionButton = (
    name: string | undefined,
    values: string | undefined
  ) => {
    if (!name || !values) {
      addToast("error", "Please fill all the fields");
      return;
    }
    if (
      input.filter((item) => item.name === name).length > 1 ||
      watch("VariantOption")?.filter((item) => item.name === name).length > 0
    ) {
      addToast("error", "Option already added");
      return;
    }

    const option = {
      name,
      values: values.split(",").map((value) => value.trim()),
    };
    const updatedOption = [...(watch("VariantOption") || []), option];
    setValue("VariantOption", updatedOption);
    setInput([...input, newOption]);
  };

  const handleDropDownChange = (value: string, index: number) => {
    setInput((currentInput) =>
      currentInput.map((item, i) =>
        i === index ? { ...item, name: value } : item
      )
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setInput((currentInput) =>
      currentInput.map((item, i) =>
        i === index ? { ...item, value: e.target.value } : item
      )
    );
  };

  const handleDeleteOption = (index: number) => {
    setInput((currentInput) =>
      currentInput.filter((_, i) =>
        currentInput.length === 1 ? true : i !== index
      )
    );
  };

  const saveUpdateProduct = () => {
    setCurrentTabIndex(1);
  };

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
        <h3 className="text-xl font-semibold">Create New Variants Options</h3>

        <div className="flex w-full flex-col gap-4">
          {input.map((option, index) => (
            <div
              className="flex flex-wrap items-center gap-4"
              key={option.name}
            >
              <DropDown
                className="min-w-[200px]"
                aria-label="Variant option"
                placeholder="Option name"
                onValueChange={(e) => handleDropDownChange(e, index)}
                value={input[index]?.name}
                list={options}
              />
              <Input
                className=" placeholder:text-[13px]"
                value={input[index]?.value}
                placeholder="Option Value"
                onChange={(e) => handleInputChange(e, index)}
                label="Variation"
                hideLabel
                id="variantion"
              />
              <Button
                type="button"
                className="rounded-md bg-gray-600/10 p-[10px] text-blue-500 transition-all duration-300 hover:bg-blue-600 hover:text-gray-100"
                aria-label="select-option"
                onClick={() =>
                  handleAddOptionButton(input[index]?.name, input[index]?.value)
                }
              >
                <MdDownloadDone size={18} />
              </Button>
              <Button
                type="button"
                onClick={() => handleDeleteOption(index)}
                className="rounded-md bg-gray-600/10 p-[10px] text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-gray-100"
                aria-label="delete-option"
              >
                <GiCancel size={18} />
              </Button>
            </div>
          ))}
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
      <div className="flex w-full justify-end gap-4">
        <Button
          onClick={() => router.push("/products")}
          className="w-fit rounded-md bg-gray-300 px-6 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
          type="button"
        >
          Cancel
        </Button>
        <Button
          className="w-fit rounded-md bg-[#0095e8] px-6 py-2 text-white"
          type="button"
          onClick={() => saveUpdateProduct()}
        >
          {router.query.productId ? "Update" : "Create"} Product
        </Button>
      </div>
    </div>
  );
};

export default General;
