"use client";

import { cn } from "@/lib/utils";
import { IoIosMore } from "react-icons/io";

const MoreBtn = ({
  size,
  className,
  handler,
}: {
  size: number;
  className?: string;
  handler?: () => void;
}) => {
  return (
    <IoIosMore
      className={cn("cursor-pointer", className)}
      size={size}
      onClick={handler}
    />
  );
};

export default MoreBtn;
