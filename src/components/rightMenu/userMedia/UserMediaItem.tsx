import { cn } from "@/lib/utils";
import Image from "next/image";

const UserMediaItem = ({
  imgUrl,
  alt,
  className,
}: {
  imgUrl: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-1/5 h-24", className)}>
      <Image
        src={imgUrl}
        alt={alt || "some image"}
        fill
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default UserMediaItem;
