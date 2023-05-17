import React, { useState, useEffect } from "react";
import * as RadioGroup from '@radix-ui/react-radio-group';

type UseRadioGroupInputProps = {
    options: {
        label: string,
        descriptionTag: string,
    }[],
}

type UseRadioGroupInput = ({ options, }: UseRadioGroupInputProps) => [
    React.FC,
    string,
    React.Dispatch<React.SetStateAction<string>>
];


const useRadioGroupInput: UseRadioGroupInput = ({ options, }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const RadioGroupFunComp: React.FC = () => {
        return (
            <>
                <RadioGroup.Root
                    className="flex flex-col gap-2.5"
                    onValueChange={() => console.log(RadioGroup.Indicator)}
                >
                    {
                        options.map((item, indx) => (
                            <>
                                <div key={`${item.label}${indx}`} className="w-full h-full flex items-center justify-center gap-3">
                                    <span
                                        className="w-12 h-12 flex items-center justify-center"
                                    >
                                        <RadioGroup.Item
                                            className="bg-[#009ef7] w-[25px] h-[25px] rounded-full outline-none cursor-default"
                                            value={item.label}
                                            id={item.label}
                                        >
                                            <RadioGroup.Indicator
                                                className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-white" />
                                        </RadioGroup.Item>
                                    </span>
                                    <span
                                        className="w-fit h-fit flex flex-col items-start justify-start"
                                    >
                                        <label className="" htmlFor="r1">
                                            {item.label}
                                        </label>
                                        <p
                                            className=""
                                        >{item.descriptionTag}</p>
                                    </span>
                                </div>
                            </>
                        ))
                    }
                </RadioGroup.Root>
            </>
        )
    }
    return [RadioGroupFunComp, selectedOption, setSelectedOption]
};

export default useRadioGroupInput;