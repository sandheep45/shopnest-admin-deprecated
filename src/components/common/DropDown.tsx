import React, { forwardRef } from "react";
import { SlArrowDown } from "react-icons/sl";
import * as DropDownPrimitive from "@radix-ui/react-select";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface IDropDownProps
  extends React.ComponentProps<typeof DropDownPrimitive.Root> {
  list: {
    name: string;
    value: string;
  }[];
  label?: string;
  "aria-label": string;
  placeholder?: string;
  descriptionTag?: string;
  className?: string;
  wrapperClassName?: string;
  hideLabel?: boolean;
}

const DropDown = forwardRef<HTMLButtonElement, IDropDownProps>((props, ref) => {
  const value = props?.list?.find((item) => item.value === props.value)?.name;

  return (
    <div
      className={`flex w-auto flex-col gap-2 ${
        props.wrapperClassName ? props.wrapperClassName : ""
      }`}
    >
      {props.label && (
        <span
          className={`text-sm font-semibold ${
            props.hideLabel ? "sr-only" : ""
          }`}
        >
          {props.label}
        </span>
      )}
      <DropDownPrimitive.Root {...props}>
        <DropDownPrimitive.Trigger
          className={`flex h-[50px] max-h-[50px] w-auto items-center justify-between gap-5 rounded border border-gray-300 px-[15px] text-[13px] leading-none outline-none data-[placeholder]:text-gray-700 dark:border-gray-700 dark:data-[placeholder]:text-gray-300 ${
            props.className ? props.className : ""
          }`}
          ref={ref}
          aria-label={props["aria-label"]}
        >
          <DropDownPrimitive.Value placeholder={props.placeholder}>
            {props.value ? value : props.placeholder}
          </DropDownPrimitive.Value>
          <DropDownPrimitive.Icon className="text-gray-700 dark:text-gray-300">
            <SlArrowDown />
          </DropDownPrimitive.Icon>
        </DropDownPrimitive.Trigger>
        <DropDownPrimitive.Content className="z-[8] rounded-md bg-white p-3 shadow-2xl dark:bg-[#1e1e2d] dark:shadow-slate-950">
          <ScrollArea.Root className="h-full w-full" type="auto">
            <DropDownPrimitive.Viewport className="h-full w-full p-[5px]">
              <DropDownPrimitive.Group className="">
                <DropDownPrimitive.Label className="pb-3 leading-[25px]">
                  Select {props.label}
                </DropDownPrimitive.Label>
                {props?.list?.map((item) => (
                  <SelectItem key={item.name} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </DropDownPrimitive.Group>
            </DropDownPrimitive.Viewport>
            <ScrollArea.Scrollbar
              className="w-[4px] px-[2px] py-[5px]"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </DropDownPrimitive.Content>
      </DropDownPrimitive.Root>
      {props.descriptionTag && (
        <span className="px-3 text-sm dark:text-gray-500">
          {props.descriptionTag}
        </span>
      )}
    </div>
  );
});

interface ISelectItemProps
  extends React.ComponentProps<typeof DropDownPrimitive.Item> {}

const SelectItem = React.forwardRef<HTMLDivElement, ISelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropDownPrimitive.Item
        className={
          "relative flex h-[25px] cursor-pointer select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-400/20 data-[disabled]:text-gray-400 data-[highlighted]:text-blue-400 data-[highlighted]:outline-none dark:data-[highlighted]:bg-blue-400/20 dark:data-[disabled]:text-gray-800"
        }
        {...props}
        ref={forwardedRef}
      >
        <DropDownPrimitive.ItemText>{children}</DropDownPrimitive.ItemText>
      </DropDownPrimitive.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

DropDown.displayName = "DropDown";

export default DropDown;
