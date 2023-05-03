import React from "react";

interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  lable?: string;
  descriptionTag?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {props.lable && (
          <label htmlFor={props.id} className="text-sm font-semibold">
            {props.lable}
          </label>
        )}
        <textarea
          id={props.id}
          rows={10}
          ref={ref}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
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
  }
);

TextArea.displayName = "Input";

export default TextArea;
