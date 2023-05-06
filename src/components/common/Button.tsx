import React from "react";
import {
  type AriaButtonProps,
  useButton,
  useHover,
  useFocus,
  mergeProps,
} from "react-aria";

interface IButtonProps extends AriaButtonProps {
  className?: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { hoverProps } = useHover(props);
  const { focusProps } = useFocus(props);
  return (
    <button
      className={props.className}
      ref={ref}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
    >
      {props.children}
    </button>
  );
};

export default Button;
