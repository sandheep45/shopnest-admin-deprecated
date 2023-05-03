import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
interface List {
  name: string;
  value: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: List[];
}

const DropDown: React.FC<DropdownProps> = ({ list, name, onClick, value }) => {
  return (
    <div className="relative w-full">
      <MdKeyboardArrowDown className="absolute right-3 top-3 scale-[1.7]" />
      <select
        onClick={onClick}
        value={value}
        name={name}
        className="w-full appearance-none rounded-md border border-gray-700 p-2 outline-none dark:bg-[#1e1e2d] dark:text-gray-300"
      >
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
