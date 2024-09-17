import Button from "@/components/shared/Button";
import { UserFriendRequest } from "@/types/user";
import Image from "next/image";
import { IoCheckmarkCircle, IoCloseCircleOutline } from "react-icons/io5";

const FriendRequestsItem = ({
  request,
  action,
}: {
  request: UserFriendRequest;
  action: (
    reqId: number,
    userId: string,
    type: "accept" | "decline"
  ) => Promise<void>;
}) => {
  const imageUrl = request?.sender?.avatar || "/no-Avatar.png";
  const name =
    request?.sender?.name && request?.sender?.surename
      ? `${request?.sender?.name} ${request?.sender?.surename}`
      : request?.sender?.username;

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
        <form action={() => action(request?.id, request?.sender?.id, "accept")}>
          <Button className="bg-transparent px-0">
            <IoCheckmarkCircle
              className="text-sky-500 hover:text-sky-300 cursor-pointer"
              size={20}
            />
          </Button>
        </form>
        <form
          action={() => action(request?.id, request?.sender?.id, "decline")}
        >
          <Button className="bg-transparent px-0">
            <IoCloseCircleOutline
              className="text-gray-400 cursor-pointer hover:text-sky-200"
              size={20}
            />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FriendRequestsItem;
