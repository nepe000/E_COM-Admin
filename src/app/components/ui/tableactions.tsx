import Link from "next/link";
import React from "react";
import { FaPenClip } from "react-icons/fa6";
import { RiDeleteBin3Fill } from "react-icons/ri";

interface IProps {
  updateLink: string;
  handleDelete: () => void;
}
export const Actions: React.FC<IProps> = ({ updateLink, handleDelete }) => {
  return (
    <div className="flex justify-center">
      <Link href={updateLink}>
        <FaPenClip size={28} className="text-green-500" />
      </Link>
      <button onClick={handleDelete} className="w-fit cursor-pointer">
        <RiDeleteBin3Fill size={28} className="text-red-500" />
      </button>
    </div>
  );
};
