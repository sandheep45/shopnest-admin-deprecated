import React, { forwardRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
interface List {
  name: string;
  value: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: List[];
  label?: string;
  descriptionTag?: string;
  wrapperClassName?: string;
}

const DropDown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const { label, descriptionTag, list, value, wrapperClassName, ...restProps } =
    props;

  return (
    <div
      className={`flex w-auto flex-col gap-2 ${
        wrapperClassName ? wrapperClassName : ""
      }`}
    >
      {label && (
        <label htmlFor={props.id} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <div
        className={`relative rounded-md border border-gray-300 dark:border-gray-700`}
      >
        <select
          ref={ref}
          {...restProps}
          className={`w-full appearance-none rounded-md py-3 pl-3 pr-10 outline-none dark:bg-[#1e1e2d] dark:text-gray-300 ${
            props.className ? props.className : ""
          }`}
          value={value}
        >
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="absolute right-3 top-[18px]">
          <MdKeyboardArrowDown className="scale-[1.7] text-gray-500" />
        </button>
      </div>
      {descriptionTag && (
        <span className="px-3 text-sm dark:text-gray-500">
          {descriptionTag}
        </span>
      )}
    </div>
  );
});

DropDown.displayName = "DropDown";

export default DropDown;
