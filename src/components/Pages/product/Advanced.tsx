import type { Options } from "@prisma/client";
import Button from "@src/components/common/Button";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import Loader from "@src/components/common/Loader";
import TextArea from "@src/components/common/TextArea";
import { useToast } from "@src/context/ToastContextProvider";
import { type CreateProductInput } from "@src/schema";
import { api } from "@src/utils/api";
import { taxClassOptions } from "@src/utils/constants";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IoCloudUpload } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";

interface IAdvanceProps {
  isCurrentTab?: boolean;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface IOptions extends Options {
  selectedValue: string;
}

const Advanced: React.FC<IAdvanceProps> = ({
  isCurrentTab,
  setCurrentTabIndex,
}) => {
  const { productId } = useRouter().query;
  const utils = api.useContext();
  const { addToast } = useToast();
  const { register, watch, setValue } = useFormContext<CreateProductInput>();
  const [variantOption, setVariantOption] = useState<IOptions[]>([]);
  const [numberOfVariants, setNumberOfVariants] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { VariantOption } = watch();

  const taxOption = useMemo(() => taxClassOptions, []);

  const searchVariant = () => {
    setIsLoading(true);
    try {
    } catch (error) {
      addToast("error", "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const newOption = VariantOption?.map((option) => ({
      name: option.name,
      values: option.values,
      selectedValue: "",
    }));
    setVariantOption(newOption || []);
  }, [VariantOption]);

  const handleOptionChange = (value: string, variantOption: IOptions) => {
    setVariantOption((currentOption) =>
      currentOption.map((option) =>
        option.name === variantOption.name
          ? { ...option, selectedValue: value }
          : option
      )
    );
  };

  return (
    <div
      className={`flex w-full flex-col gap-6 transition-all duration-300 ${
        isCurrentTab
          ? ""
          : "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden opacity-0"
      }`}
    >
      {isLoading && <Loader />}
      {/* inventory */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Inventory</h3>

        {variantOption.length > 0 && (
          <div className="flex w-full flex-wrap items-center gap-4">
            {variantOption.map((variantOption) => (
              <DropDown
                className="min-w-[150px]"
                key={variantOption.name}
                onValueChange={(value) =>
                  handleOptionChange(value, variantOption)
                }
                value={variantOption.selectedValue}
                aria-label="variant-option"
                descriptionTag={`Set the product variant ${variantOption.name} option.`}
                placeholder={variantOption.name}
                list={variantOption.values?.split(",").map((value) => ({
                  name: value,
                  value,
                }))}
              />
            ))}
            {productId && (
              <Button
                onClick={searchVariant}
                type="button"
                aria-label="search-variants"
              >
                <MdOutlineManageSearch size={30} />
              </Button>
            )}
          </div>
        )}

        <Input
          {...register(`Variant.sku`)}
          placeholder="SKU number"
          descriptionTag="Enter the product SKU."
          label="SKU"
          id="sku"
        />

        <Input
          {...register(`Variant.barcode`)}
          placeholder="Barcode number"
          descriptionTag="Enter the product barcode number."
          label="Barcode"
          id="barcode"
        />

        <div className="flex w-full flex-col gap-2">
          <h4 className="text-sm font-semibold">Quantity</h4>
          <div className="flex w-full flex-wrap items-center gap-3">
            <Input
              {...register(`Variant.quantity.onSelf`)}
              placeholder="On Self"
              id="quantity"
              wrapperClassName="flex-1"
              label="Quantity"
              hideLabel
            />
            <Input
              {...register(`Variant.quantity.inWareHouse`)}
              placeholder="In Warehouse"
              label="Ware house"
              id="ware-house"
              hideLabel
              wrapperClassName="flex-1"
            />
          </div>
          <span className="px-3 text-sm dark:text-gray-500">
            Enter the product quantity.
          </span>
        </div>
      </Card>

      {/* pricing */}
      <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
        <h3 className="text-xl font-semibold">Pricing</h3>

        <Input
          {...register(`Variant.price`)}
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
            wrapperClassName="flex-1"
            className="flex-1"
            placeholder="Select Tax Class"
            aria-label="tax-class"
            descriptionTag="Set the product tax class."
            label="Tax Class"
            list={taxOption}
          />
          <Input
            {...register(`Variant.taxPercent`)}
            type="number"
            wrapperClassName="flex-1"
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
          {...register(`Variant.weight`, { valueAsNumber: true })}
          type="number"
          placeholder="Weight"
          descriptionTag="Set a product weight in kilograms (kg)."
          label="Weight"
          id="weight"
        />

        <div className="flex w-full flex-col gap-3">
          <h4 className="text-sm font-semibold">Dimention</h4>
          <div className="flex w-full flex-wrap items-start gap-3">
            <Input
              {...register(`Variant.width`, {
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Width (W)"
              wrapperClassName="flex-1"
              descriptionTag="Enter the product dimensions(cm)."
              className="flex-1"
              id="width"
              label="Width"
              hideLabel
            />
            <Input
              {...register(`Variant.height`, {
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Height (H)"
              wrapperClassName="flex-1"
              label="Height"
              hideLabel
              id="height"
              className="flex-1"
            />
            <Input
              {...register(`Variant.length`, {
                valueAsNumber: true,
              })}
              placeholder="Length (L)"
              type="number"
              wrapperClassName="flex-1"
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
          descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
          label="Meta Tag Title"
          id="meta-tag-title"
        />

        <TextArea
          descriptionTag="Set a description to the product for better visibility."
          lable="Meta Tag Description"
          id="meta-tag-description"
        />

        <Input
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
          onClick={() => setNumberOfVariants(numberOfVariants + 1)}
          type="button"
          className="w-fit rounded-md bg-[#0095e8] px-6 py-2 text-white"
        >
          Add Variants
        </Button>
        <Button
          type="submit"
          className="w-fit rounded-md bg-[#0095e8] px-6 py-2 text-white"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Advanced;
