import { type User, type CustomerReview } from "@prisma/client";
import Card from "@src/components/common/Card";
import Table from "@src/components/common/Table";
import { api } from "@src/utils/api";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import React from "react";

interface IReviewProps {
  isCurrentTab?: boolean;
  productId: string;
}

interface IReviewData extends CustomerReview {
  customer: User;
}

const columnHelper = createColumnHelper<IReviewData>();

const columns = [
  columnHelper.accessor("id", {
    header: () => (
      <span className="flex w-full items-center justify-center">
        <input className="h-5 w-5" type="checkbox" />
      </span>
    ),
    cell: () => (
      <span className="flex w-full items-center justify-center">
        <input className="h-5 w-5" type="checkbox" />
      </span>
    ),
  }),
  columnHelper.accessor((row) => row.rating, {
    id: "rating",
    header: () => <span className="text-left">Rating</span>,
    cell: (info) => <span className="">{info.getValue()}</span>,
  }),
  columnHelper.accessor("customer", {
    header: () => <span className="">Customer</span>,
    cell: (info) => (
      <span className="flex items-center  gap-3">
        <Image
          src={info.getValue().image || "/svg/Profile.svg"}
          alt="avatar"
          width={30}
          height={30}
          className="h-10 w-10 rounded-full"
        />
        <span className="truncate">{info.getValue().name}</span>
      </span>
    ),
  }),
  columnHelper.accessor("comment", {
    header: () => <span className="text-left">Comment</span>,
    cell: (info) => <span className="">{info.getValue()}</span>,
  }),
  columnHelper.accessor("updatedAt", {
    header: "Date",
    cell: (info) => (
      <span className="flex-1">{info.getValue().toLocaleDateString()}</span>
    ),
  }),
];

const Review: React.FC<IReviewProps> = ({ isCurrentTab, productId }) => {
  const { data } = api.customerReview.getSingleReview.useQuery({
    productId: productId,
  });

  if (!data) return null;

  return (
    <div
      className={`flex w-full flex-col gap-6 transition-all duration-300 ${
        isCurrentTab
          ? ""
          : "pointer-events-none absolute bottom-0 left-0 right-0 top-0 overflow-hidden opacity-0"
      }`}
    >
      <Card className="w-full flex-col gap-5 px-8 pb-12 pt-8">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold">Customer Review</h2>
          <span>Rating</span>
        </div>
        <Table
          className="w-full table-auto"
          tableHeaderCellClassName="dark:text-gray-700 py-3 px-4"
          tableHeaderClassName="text-left"
          tableBodyCellClassName="border-t border-dashed dark:border-gray-400 border-gray-500 py-3 px-4"
          columns={columns}
          data={data}
        />
      </Card>
    </div>
  );
};

export default Review;
