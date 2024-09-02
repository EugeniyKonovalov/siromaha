import Image from "next/image";
import { IoCheckmarkCircle, IoCloseCircleOutline } from "react-icons/io5";

const FriendRequestsItem = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={imageUrl}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold text-sm line-clamp-1">{name}</span>
      </div>
      <div className="flex items-center gap-1">
        <IoCheckmarkCircle
          className="text-sky-500 hover:text-sky-300 cursor-pointer"
          size={20}
        />
        <IoCloseCircleOutline
          className="text-gray-400 cursor-pointer hover:text-sky-200"
          size={20}
        />
      </div>
    </div>
  );
};

export default FriendRequestsItem;
