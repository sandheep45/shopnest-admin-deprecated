import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  descriptionTag?: string;
  hideLabel?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={props.id}
        className={`text-sm font-semibold ${props.hideLabel ? "sr-only" : ""}`}
      >
        {props.label}
      </label>
      <input
        id={props.id}
        ref={ref}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        onKeyDown={props.onKeyDown}
        className={`w-full rounded-md border border-gray-300 p-2 outline-none dark:border-gray-700 dark:bg-[#1e1e2d] dark:text-gray-300 ${
          props.className ? props.className : ""
        }`}
      />
      {props.descriptionTag && (
        <span className="px-3 text-sm dark:text-gray-500">
          {props.descriptionTag}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
