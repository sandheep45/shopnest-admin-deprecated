import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className="w-full">
      <input
        ref={ref}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        onKeyDown={props.onKeyDown}
        className={`w-full rounded-md border border-gray-700 p-2 outline-none dark:bg-[#1e1e2d] dark:text-gray-300 ${
          props.className ? props.className : ""
        }`}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
