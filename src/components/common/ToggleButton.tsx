import { useToggleState } from "react-stately";
import {
  type AriaToggleButtonProps,
  useToggleButton,
  useHover,
  useFocus,
  mergeProps,
} from "react-aria";
import { useRef } from "react";

interface IToggleButtonProps extends AriaToggleButtonProps {
  className?: string;
}

const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState(props);
  const { hoverProps } = useHover(props);
  const { focusProps } = useFocus(props);
  const { buttonProps } = useToggleButton(props, state, ref);

  return (
    <button
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      className={props.className}
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
};

export default ToggleButton;
