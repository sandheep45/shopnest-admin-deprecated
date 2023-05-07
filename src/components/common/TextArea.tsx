import React from "react";

interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  lable?: string;
  descriptionTag?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    const { lable, descriptionTag, ...restProps } = props;
    return (
      <div className="flex w-full flex-col gap-2">
        {lable && (
          <label htmlFor={props.id} className="text-sm font-semibold">
            {lable}
          </label>
        )}
        <textarea
          {...restProps}
          ref={ref}
          rows={10}
          className={`w-full rounded-md border border-gray-300 p-2 outline-none dark:border-gray-700 dark:bg-[#1e1e2d] dark:text-gray-300 ${
            props.className ? props.className : ""
          }`}
        />
        {descriptionTag && (
          <span className="px-3 text-sm dark:text-gray-500">
            {descriptionTag}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
