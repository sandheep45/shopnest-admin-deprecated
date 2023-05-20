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

            {/* store template card */}
            <Card className="flex-col gap-4 pb-12 pt-8">
                <h2 className="text-xl font-semibold">Store Template</h2>

                <DropDown
                    aria-label="status"
                    {...register("categoryStoreTemplate")}
                    descriptionTag="Assign a template from your current theme to define how a single category is displayed."
                    list={statusOption}
                />
            </Card>
        </div>
    );
};

export default LeftSection;
