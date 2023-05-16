import React, { useEffect, type Dispatch, type SetStateAction } from "react";
import { RadioGroupInputContext } from "./RadioGroupInput";
import { type RadioGroupState } from "react-stately";
import { useFocusRing, useRadio, VisuallyHidden } from "react-aria";

type TSetSelected = Dispatch<SetStateAction<string>>;

interface IRadioInputProps {
    value: string;
    children: React.ReactNode;
    selectedRadioInput: string;
    setSelectedRadioInput: TSetSelected;
}

const RadioInput = (props: IRadioInputProps) => {
    // console.log("props: ", props);
    const { value, children, selectedRadioInput, setSelectedRadioInput } = props;
    const stateOrNull = React.useContext(RadioGroupInputContext);
    const state = stateOrNull as RadioGroupState
    const ref = React.useRef(null);
    const { inputProps, isDisabled, isSelected } = useRadio(props, state, ref);
    const { isFocusVisible, focusProps } = useFocusRing();
    const strokeWidth = isSelected ? 6 : 2;
    useEffect(() => {
        setSelectedRadioInput(() => isSelected ? value : '');
    }, [isSelected, value, setSelectedRadioInput]);
    // setSelectedRadioInput(() => isSelected ? value : '');`
    // console.log("inputProps: ", inputProps);

    return (
        // <label className="flex justify-center">
        //     <input {...inputProps} ref={ref} />
        //     {children}
        // </label>
        <label
            className="flex justify-center items-center gap-4"
            id={`radio-${value}`}
        >
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <svg
                width={40}
                height={40}
                aria-hidden="true"
                className="flex items-center justify-center"
            >
                {
                    isSelected ?
                        <circle
                            cx={13}
                            cy={13}
                            r={8}
                            fill="white"
                            stroke='#009EF7'
                            strokeWidth={strokeWidth}
                        /> : <circle
                            cx={13}
                            cy={13}
                            r={10}
                            fill="#2b2b40" />
                }
                {isFocusVisible &&
                    (
                        <circle
                            cx={13}
                            cy={13}
                            r={13}
                            fill="none"
                            // stroke="#1e1e2d"
                            stroke="#D1D5DB"
                            strokeWidth={2}
                        />
                    )}
            </svg>
            {children}
        </label>
    );
}

export default RadioInput;