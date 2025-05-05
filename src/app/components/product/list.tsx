/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Table from "../ui/table";
import { createColumnHelper } from "@tanstack/react-table";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllProducts, deleteProduct } from "@/api/product";
import { Actions } from "../ui/tableactions";
import toast from "react-hot-toast";
import Image from "next/image";

type Category = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const ProductList = () => {
  const columnHelper = createColumnHelper<any>();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<any>({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });
  console.log(data);

  const { isPending, mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess(data: any) {
      if (data.success) {
        toast.success(data?.message);
      }

      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError(error) {
      toast.error(error?.message);
    },
  });

  const handleDelete = (id: string) => {
    console.log("delete", id);
    mutate(id);
  };

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <span>Product Name</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.description, {
      id: "description",
      cell: (info) => <i>{info.getValue() ?? "-"}</i>,
      header: () => <span>Description</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("price", {
      cell: (info) => info.getValue(),
      header: () => <span>Price</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("coverImage", {
      cell: (info) => (
        <div className="h-20 w-20">
          <Image
            height={100}
            width={100}
            src={info.getValue()[0].path ?? ""}
            alt="Cover Image"
          />
        </div>
      ),

      header: () => <span>Cover Image</span>,
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor("createdAt", {
      header: () => <span>Created At</span>,
      cell: (info) => (
        <i>
          {new Date(info.getValue()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </i>
      ),
    }),
    columnHelper.accessor("updatedAt", {
      header: "Updated At",
      cell: (info) => (
        <i>
          {new Date(info.getValue()).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </i>
      ),
    }),

    columnHelper.accessor("_id", {
      header: "Actions",
      cell: (info) => {
        return (
          <Actions
            handleDelete={() => {
              handleDelete(info.row.original._id);
            }}
            updateLink={`/category/update/${info.row.original._id}`}
          />
        );
      },
    }),
  ];

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data?.data?.data ?? []} />
    </div>
  );
};
