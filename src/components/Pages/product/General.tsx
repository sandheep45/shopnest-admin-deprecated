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
  VariantOption,
} from "@prisma/client";
import TextArea from "@src/components/common/TextArea";
import { api } from "@src/utils/api";
import Button from "@src/components/common/Button";
import { useRouter } from "next/router";
import Loader from "@src/components/common/Loader";

interface IGeneratProps {
  className?: string;
  isCurrentTab?: boolean;
  setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>;
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
  option: VariantOption[] | undefined;
}

const General: React.FC<IGeneratProps> = ({
  isCurrentTab,
  setCurrentTabIndex,
}) => {
  const router = useRouter();
  const { register, setValue, watch } = useFormContext<IProduct>();
  const { isLoading, isFetching } =
    api.variants.searchAllVariantOptionsOfaProduct.useQuery(
      {
        productId: (router.query.productId as string) || "",
        searchString: "",
      },
      {
        onSuccess: (data) => {
          setValue("option", data ? data : []);
        },
      }
    );

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
        <h3 className="text-xl font-semibold">Variants Options</h3>

        {watch("option")?.map((item) => (
          <div key={item.id} className="flex w-full flex-wrap items-end gap-4">
            {isLoading || isFetching ? (
              <>
                <DropDown
                  list={
                    item.values.map((item) => ({
                      name: item,
                      value: item,
                    })) || []
                  }
                  {...register("variant.name")}
                  label={`${item.name}`}
                  id="add-variants"
                />
                <Input
                  // {...register("")}
                  label="Variation"
                  hideLabel
                  id="variantion"
                />
              </>
            ) : (
              <Loader />
            )}
          </div>
        ))}
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
          onPress={() => router.push("/products")}
          className="w-fit rounded-md bg-gray-300 px-6 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
          type="button"
        >
          Cancel
        </Button>
        <Button
          className="w-fit rounded-md bg-[#0095e8] px-6 py-2 text-white"
          type="button"
          onPress={() => setCurrentTabIndex(1)}
        >
          Add Variant
        </Button>
      </div>
    </div>
  );
};

export default General;
