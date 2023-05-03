import React from "react";
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

const DropDown: React.FC<DropdownProps> = (props) => {
  return (
    <div className=" flex w-full flex-col gap-2">
      {props.label && (
        <label htmlFor={props.id} className="text-sm font-semibold">
          {props.label}
        </label>
      )}
      <div className="relative w-full">
        <MdKeyboardArrowDown className="absolute right-3 top-3 scale-[1.7] text-gray-500" />
        <select
          onClick={props.onClick}
          value={props.value}
          name={props.name}
          className="w-full appearance-none rounded-md border border-gray-300 p-2 outline-none dark:border-gray-700 dark:bg-[#1e1e2d] dark:text-gray-300"
        >
          {props.list.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {props.descriptionTag && (
        <span className="px-3 text-sm dark:text-gray-500">
          {props.descriptionTag}
        </span>
      )}
    </div>
  );
};

export default DropDown;
