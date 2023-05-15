import { useRadioGroupState, type RadioGroupState } from 'react-stately';
import { useRadio, useRadioGroup } from 'react-aria';
import React from 'react';

export const RadioGroupInputContext = React.createContext<RadioGroupState | null>(null);

// interface RadioGroupProps extends AriaRadioGroupProps {
//   children: React.ReactNode;
// }

// interface RadioProps extends AriaRadioProps {
//   children: React.ReactNode;
// }

export interface IRadioGroupInputProps {
    children: React.ReactNode;
    label: string;
    description?: string;
    errorMessage?: string;
    validationState?: 'valid' | 'invalid';
}

const RadioGroupInput: React.FC<IRadioGroupInputProps> = (props) => {
    const { children, label, description, errorMessage, validationState } = props;
    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(props, state);

    return (
        <div {...radioGroupProps}>
            <span {...labelProps}>{label}</span>
            <RadioGroupInputContext.Provider value={state}>
                {children}
            </RadioGroupInputContext.Provider>
            {description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
            )}
            {errorMessage && validationState === 'invalid' &&
                (
                    <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
                        {errorMessage}
                    </div>
                )}
        </div>
    );
}

export default RadioGroupInput;