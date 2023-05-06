import React, { useImperativeHandle, useRef } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface Props {
  columns: any[];
  data: any[];
  tableClassName?: string;
  tableHeaderClassName?: string;
  tableBodyClassName?: string;
  tableFooterClassName?: string;
  tableRowClassName?: string;
  tableHeaderRowClassName?: string;
  tableBodyRowClassName?: string;
  tableFooterRowClassName?: string;
  tableCellClassName?: string;
  tableHeaderCellClassName?: string;
  tableBodyCellClassName?: string;
  tableFooterCellClassName?: string;
}

type NativeAttrs = Omit<
  React.TableHTMLAttributes<unknown>,
  keyof Props | "children"
>;

export type TableProps = Props & NativeAttrs;

const applyClassConditionally = (className: string | undefined) =>
  className ? className : "";

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (tableProps, ref: React.Ref<HTMLTableElement | null>) => {
    const {
      columns,
      data,
      tableBodyCellClassName: tablebodycellclassname,
      tableBodyClassName: tablebodyclassname,
      tableBodyRowClassName: tablebodyrowclassname,
      tableClassName: tableclassname,
      tableFooterCellClassName: tablefootercellclassname,
      tableFooterClassName: tablefooterclassname,
      tableFooterRowClassName: tablefooterrowclassname,
      tableHeaderCellClassName: tableheadercellclassname,
      tableHeaderClassName: tableheaderclassname,
      tableHeaderRowClassName: tableheaderrowclassname,
      ...restProps
    } = tableProps;
    const tableRef = useRef<HTMLTableElement | null>(null);
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    useImperativeHandle(ref, () => tableRef?.current);

    return (
      <div className="max-w-full overflow-x-auto">
        <table
          className={`w-full ${applyClassConditionally(tableclassname)}`}
          ref={tableRef}
          {...restProps}
        >
          <thead className={`${applyClassConditionally(tableheaderclassname)}`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                className={`${applyClassConditionally(
                  tableheaderrowclassname
                )}`}
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    className={`text-lg ${applyClassConditionally(
                      tableheadercellclassname
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
          <tbody className={`${applyClassConditionally(tablebodyclassname)}`}>
            {table.getRowModel().rows.map((row) => (
              <tr
                className={`${applyClassConditionally(tablebodyrowclassname)}`}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    className={`${applyClassConditionally(
                      tablebodycellclassname
                    )}`}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className={`${applyClassConditionally(tablefooterclassname)}`}>
            {table.getFooterGroups().map((footerGroup) => (
              <tr
                className={`${applyClassConditionally(
                  tablefooterrowclassname
                )}`}
                key={footerGroup.id}
              >
                {footerGroup.headers.map((header) => (
                  <th
                    className={`${applyClassConditionally(
                      tablefootercellclassname
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
  }
);

Table.displayName = "NextUI - Table";
Table.toString = () => ".nextui-table";

export default Table;
