import Card from "@src/components/common/Card";
import DropDown from "@src/components/common/DropDown";
import { type TProduct } from "@src/utils/types";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IStatusCardProps {
  statusOption: { name: string; value: string }[];
}

const StatusCard: React.FC<IStatusCardProps> = ({ statusOption }) => {
  const { register, watch } = useFormContext<TProduct>();

  return (
    <Card className="flex-col gap-4 py-8">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold">Status</h3>
        <div className="h-4 w-4 rounded-full bg-green-700" />
      </div>

      <DropDown
        {...register("status")}
        descriptionTag="Set the product status."
        list={statusOption}
        value={watch("status")}
      />
    </Card>
  );
};

export default StatusCard;
