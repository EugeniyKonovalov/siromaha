import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface MenuItemProps {
  href: string;
  name: string;
  Icon: IconType;
  className?: string;
}

const MenuItem = ({ href, name, Icon, className }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={cn("flex gap-2 items-center relative group", className)}
    >
      <Icon size={16} className="text-sky-600" />
      <span>{name}</span>
      <span
        className={cn(
          "h-[1px] inline-block w-0 bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300"
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default MenuItem;
