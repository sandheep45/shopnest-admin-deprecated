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
    const { productId } = useRouter().query;
    const [Tabs, currentTabIndex] = useTabs({
        TabComponent: MainTabButton,
        tabs: MAIN_TABS,
    });
    const statusOption = useMemo(() => productStatusOptions, []);

    if (productId && !MAIN_TABS.includes("Review")) MAIN_TABS.push("Review");

    return (
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
            </div>
        </div>
    );
};

export default RightSection;
