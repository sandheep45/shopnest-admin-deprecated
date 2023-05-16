import React, { useMemo } from "react";
import useTabs, { type ITabComponentProps } from "@src/hooks/useTabs";
import { productStatusOptions } from "@src/utils/constants";
import { useRouter } from "next/router";
import General from "./General";

const MAIN_TABS = ["General"];

const MainTabButton: React.FC<ITabComponentProps> = ({
    isCurrentTab,
    tab,
    onClick,
}) => (
    <button
        onClick={onClick}
        className={`text-lg hover:underline hover:decoration-blue-600 hover:underline-offset-[16px] ${isCurrentTab
            ? "text-blue-600 underline underline-offset-[16px]"
            : "text-gray-500"
            }`}
    >
        {tab}
    </button>
);

const RightSection = () => {
    const { categoryId } = useRouter().query;
    const statusOption = useMemo(() => productStatusOptions, []);

    return (
        <div className="flex flex-1 flex-col gap-10">
            {/* tabs */}
            <div className="flex-1">
                <div className="relative flex-1">
                    <General />
                </div>
            </div>
        </div>
    );
};

export default RightSection;
