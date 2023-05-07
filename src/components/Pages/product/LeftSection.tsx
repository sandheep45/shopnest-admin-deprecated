import React, { useMemo } from "react";
import ThumbnailCard from "@src/components/Pages/global/ThumbnailCard";
import StatusCard from "@src/components/Pages/global/StatusCard";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Tagify from "@src/components/common/Tagify";
import { useFormContext } from "react-hook-form";
import { productStatusOptions } from "@src/utils/constants";

const LeftSection = () => {
  const { register } = useFormContext();
  const statusOption = useMemo(() => productStatusOptions, []);
  return (
    <div className="flex w-full flex-col gap-6 md:w-72">
      <ThumbnailCard />

      <StatusCard statusOption={statusOption} />

      {/* Deatils card */}
      <Card className="flex-col gap-5 pb-10 pt-8">
        <h2 className="text-xl font-semibold">Product Details</h2>

        <div className="flex w-full flex-col justify-between gap-1">
          <h3>Categories</h3>
          <DropDown
            {...register("category")}
            descriptionTag="Add product to a category."
            list={statusOption}
          />
        </div>

        <div className="flex w-full flex-col justify-between gap-1">
          <h4>Tags</h4>
          <Tagify descriptionTag="Add tags to a category." tags={[]} />
        </div>
      </Card>

      {/* weekly sales */}
      <Card className="flex-col gap-4 pb-12 pt-8">
        <h2 className="text-xl font-semibold">Weekly Sales</h2>

        <div className="relative w-full">
          <span className="text-sm dark:text-gray-500">
            No data available. Sales data will begin capturing once product has
            been published.
          </span>
        </div>
      </Card>

      {/* template card */}
      <Card className="flex-col gap-4 pb-12 pt-8">
        <h2 className="text-xl font-semibold">Product Template</h2>

        <DropDown
          {...register("template")}
          descriptionTag="Assign a template from your current theme to define how a single
                product is displayed."
          list={statusOption}
        />
      </Card>
    </div>
  );
};

export default LeftSection;
