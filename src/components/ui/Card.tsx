import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("w-full p-4 bg-slate-600 rounded-lg shadow-md", className)}
    >
      {children}
    </div>
  );
};

export default Card;
