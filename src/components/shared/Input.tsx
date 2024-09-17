import { cn } from "@/lib/utils";
import { InputProps } from "@/types/shared";

const Input = ({ input, label, className }: InputProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {label ? (
        <label htmlFor={input.id} className="text-xs text-gray-300">
          {label}
        </label>
      ) : null}
      <input
        role="presentation"
        autoComplete="new-password"
        className={cn(
          "outline-none ring-1 ring-sky-300 text-slate-800 p-3 rounded-md test-sm",
          className
        )}
        {...input}
      />
    </div>
  );
};

export default Input;
