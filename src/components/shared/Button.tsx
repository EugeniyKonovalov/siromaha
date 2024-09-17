import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  className,
  type,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean | undefined;
}) => {
  return (
    <button
      className={cn(
        "bg-sky-600 text-white text-xs px-2 py-1 rounded-md",
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
