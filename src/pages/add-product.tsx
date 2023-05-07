import React, { useMemo } from "react";
import { productStatusOptions } from "@src/utils/constants";
import useTabs, { type ITabComponentProps } from "@src/hooks/useTabs";
import General from "@src/components/Pages/product/General";
import Advanced from "@src/components/Pages/product/Advanced";
import Head from "next/head";
import { api } from "@src/utils/api";
import { useForm, FormProvider } from "react-hook-form";
import { type Prisma } from "@prisma/client";
import LeftSection from "@src/components/Pages/product/LeftSection";

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
  const utils = api.useContext();
  const methods = useForm<Prisma.ProductCreateInput>();
  const { mutate, isLoading } = api.product.createProduct.useMutation({
    onSuccess: async () => {
      await utils.product.getAllProducts.invalidate();
    },
  });
  const [Tabs, currentTabIndex] = useTabs({
    TabComponent: MainTabButton,
    tabs: MAIN_TABS,
  });
  const statusOption = useMemo(() => productStatusOptions, []);
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Head>
        <title>Add Product Page</title>
        <meta name="description" content="Add Products to ShopNest database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="item-center flex flex-col justify-center gap-8 p-8 transition-all duration-300 md:flex-row md:items-start"
        >
          {/* left section */}
          <LeftSection />

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
        </form>
      </FormProvider>
    </>
  );
};

export default AddProduct;
