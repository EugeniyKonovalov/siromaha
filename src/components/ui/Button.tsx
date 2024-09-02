import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "bg-sky-600 text-white text-xs px-2 py-1 rounded-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
