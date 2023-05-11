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
}

const DropDown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  const { label, descriptionTag, list, ...restProps } = props;
  return (
    <div className=" flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <div
        className={`flex w-full items-center justify-between gap-3 rounded-md border border-gray-300 py-3 pl-1 pr-3 dark:border-gray-700 ${
          props.className ? props.className : ""
        }`}
      >
        <select
          ref={ref}
          {...restProps}
          className={`w-full appearance-none px-2 outline-none dark:bg-[#1e1e2d] dark:text-gray-300 `}
        >
          {list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor={props.id}>
          <MdKeyboardArrowDown className="scale-[1.7] text-gray-500" />
        </label>
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
