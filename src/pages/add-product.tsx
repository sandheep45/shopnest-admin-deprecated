import React, { useMemo } from "react";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import { productStatusOptions } from "@src/utils/constants";
import Tagify from "@src/components/common/Tagify";
import useTabs, { type ITabComponentProps } from "@src/hooks/useTabs";
import General from "@src/components/Pages/product/General";
import Advanced from "@src/components/Pages/product/Advanced";
import ThumbnailCard from "@src/components/Pages/global/ThumbnailCard";
import StatusCard from "@src/components/Pages/global/StatusCard";
import Head from "next/head";

const MAIN_TABS = ["General", "Advanced"];

const MainTabButton: React.FC<ITabComponentProps> = ({
  isCurrentTab,
  tab,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`text-lg hover:underline hover:decoration-blue-600 hover:underline-offset-[16px] ${
      isCurrentTab
        ? "text-blue-600 underline underline-offset-[16px]"
        : "text-gray-500"
    }`}
  >
    {tab}
  </button>
);

const AddProduct = () => {
  const [Tabs, currentTabIndex] = useTabs({
    TabComponent: MainTabButton,
    tabs: MAIN_TABS,
  });
  const statusOption = useMemo(() => productStatusOptions, []);

  return (
    <>
      <Head>
        <title>Add Product Page</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="item-center flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start">
        {/* left section */}
        <div className="flex w-full flex-col gap-6 md:w-72">
          <ThumbnailCard />

          <StatusCard statusOption={statusOption} />

          {/* Deatils card */}
          <Card className="flex-col gap-5 pb-10 pt-8">
            <h2 className="text-xl font-semibold">Product Details</h2>

            <div className="flex w-full flex-col justify-between gap-1">
              <h3>Categories</h3>
              <DropDown
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
                No data available. Sales data will begin capturing once product
                has been published.
              </span>
            </div>
          </Card>

          {/* template card */}
          <Card className="flex-col gap-4 pb-12 pt-8">
            <h2 className="text-xl font-semibold">Product Template</h2>

            <DropDown
              descriptionTag="Assign a template from your current theme to define how a single
                product is displayed."
              list={statusOption}
            />
          </Card>
        </div>

        {/* right section */}
        <div className="flex flex-1 flex-col gap-10">
          {/* tabs */}
          <div className="flex gap-5">
            <Tabs />
          </div>

          <div className="flex-1">
            <div className="relative flex-1">
              <General
                isCurrentTab={currentTabIndex === 0}
                statusOption={statusOption}
              />
            </div>
            <div className="relative flex-1">
              <Advanced isCurrentTab={currentTabIndex === 1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
