import React, { type Dispatch, type SetStateAction } from "react";
import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import Input from "@src/components/common/Input";
import { IoCloudUpload } from "react-icons/io5";
import GeneralCard from "../global/GeneralCard";
import { set, useFormContext } from "react-hook-form";
import TextArea from "@src/components/common/TextArea";

interface IGenerateProps {
    className?: string;
    isCurrentTab?: boolean;
    statusOption: {
        name: string;
        value: string;
    }[];
}

const RadioList = [
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
] as const;

const conditionRadioList = ["All Conditions", "Any Conditions"] as const;

type TSetSelected = Dispatch<SetStateAction<string>>;

const General = () => {
    const { register } = useFormContext();
    const [selected, setSelected]: [string, TSetSelected] = React.useState('');
    const [conditionSelected, setConditionSelected]: [string, TSetSelected] = React.useState('');

    return (
        <div
            className={`flex w-full flex-1 flex-col gap-6 transition-all duration-300`}
        >
            <GeneralCard />

            {/* Meta Options */}
            <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
                <h3 className="text-xl font-semibold">Meta Options</h3>

                <Input
                    {...register("meta.tag.name")}
                    descriptionTag="Set a meta tag title. Recommended to be simple and precise keywords."
                    label="Meta Tag Title"
                    id="metaTagTitle"
                />
                <TextArea
                    {...register("meta.tag.description")}
                    lable="Meta Tag Description"
                    descriptionTag="Set a meta tag description to the category for increased SEO ranking."
                    id="metaTagDescription"
                />
                <Input
                    {...register("meta.tag.keywords")}
                    descriptionTag="Set a list of keywords that the category is related to. Separate the keywords by adding a comma , between each keyword."
                    label="Meta Tag Keywords"
                    id="metaTagKeywords"
                />
            </Card>

            {/* Automation */}
            <Card className="w-full flex-col gap-8 px-8 pb-12 pt-8">
                <h3 className="text-xl font-semibold">Automation</h3>
            </Card>
        </div>
    );
};

export default General;
