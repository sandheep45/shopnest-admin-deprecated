import React from "react";
import * as Toggle from "@radix-ui/react-toggle";
interface IToggleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <Toggle.Root className={props.className} {...restProps}>
      {children}
    </Toggle.Root>
  );
};

export default ToggleButton;
