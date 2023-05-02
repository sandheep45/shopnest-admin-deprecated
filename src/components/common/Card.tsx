import React from "react";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  return (
    <div
      className={`flex w-full rounded-lg bg-white p-5 shadow-lg transition-all duration-300 dark:bg-[#1e1e2d] dark:text-gray-300 dark:shadow-slate-950 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
