import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";

interface ITableProps<I> {
  columns: ColumnDef<I, any>[];
  data: I[];
  className?: string;
  tableHeaderClassName?: string;
  tableBodyClassName?: string;
  tableFooterClassName?: string;
  tableHeaderRowClassName?: string;
  tableBodyRowClassName?: string;
  tableFooterRowClassName?: string;
  tableHeaderCellClassName?: string;
  tableBodyCellClassName?: string;
  tableFooterCellClassName?: string;
}

const applyClassConditionally = (className: string | undefined) =>
  className ? className : "";

const Table = <I,>(props: ITableProps<I>) => {
  const {
    data,
    columns,
    className,
    tableHeaderClassName,
    tableBodyClassName,
    tableFooterClassName,
    tableHeaderRowClassName,
    tableBodyRowClassName,
    tableFooterRowClassName,
    tableHeaderCellClassName,
    tableBodyCellClassName,
    tableFooterCellClassName,
    ...restProps
  } = props;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="max-w-full overflow-x-auto">
      <table
        className={`w-full ${applyClassConditionally(className)}`}
        {...restProps}
      >
        <thead className={`${applyClassConditionally(tableHeaderClassName)}`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className={`${applyClassConditionally(tableHeaderRowClassName)}`}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th
                  className={`text-lg ${applyClassConditionally(
                    tableHeaderCellClassName
                  )}`}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={`${applyClassConditionally(tableBodyClassName)}`}>
          {table.getRowModel().rows.map((row) => (
            <tr
              className={`${applyClassConditionally(tableBodyRowClassName)}`}
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`${applyClassConditionally(
                    tableBodyCellClassName
                  )}`}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className={`${applyClassConditionally(tableFooterClassName)}`}>
          {table.getFooterGroups().map((footerGroup) => (
            <tr
              className={`${applyClassConditionally(tableFooterRowClassName)}`}
              key={footerGroup.id}
            >
              {footerGroup.headers.map((header) => (
                <th
                  className={`${applyClassConditionally(
                    tableFooterCellClassName
                  )}`}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
