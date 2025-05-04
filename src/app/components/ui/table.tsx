/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface IProps {
  columns: any[];
  data: any[];
}

function Table({ columns, data }: IProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 rounded-lg shadow-lg border border-gray-200">
      <table className="min-w-full table-auto text-sm text-gray-700">
        <thead className="bg-blue-500 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3 px-4 text-left font-semibold tracking-wide uppercase"
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b last:border-none hover:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-3 px-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) ??
                    "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
