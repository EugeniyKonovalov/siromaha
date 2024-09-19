import MoreBtn from "@/components/shared/MoreBtn";
import { CommentType } from "@/types/post";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

const CommentItem = ({ comment }: { comment: CommentType }) => {
  const commentUserName =
    comment?.user?.name && comment?.user?.surename
      ? `${comment?.user?.name} ${comment?.user?.surename}`
      : comment?.user?.username;

  const commentDate = `${new Date(
    comment?.createdAt
  ).toLocaleDateString()} ${new Date(comment?.createdAt).getHours()}:${new Date(
    comment?.createdAt
  ).getMinutes()}`;

  return (
    <div className="flex items-start w-full gap-4">
      <Image
        src={comment?.user?.avatar || "/noAvatar.png"}
        alt="User Avatar"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex w-full flex-col gap-3">
        <span className="font-medium">{commentUserName}</span>
        <p className="text-sm">{comment?.desc}</p>
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center justify-between ">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 ">
              <AiOutlineLike
                size={16}
                className="cursor-pointer text-sky-500"
              />
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">123 Likes</span>
            </div>
            <span className="cursor-pointer hover:underline">Reply</span>
          </div>
          <span className="text-xs text-gray-400">{commentDate}</span>
        </div>
      </div>
      <MoreBtn size={20} className="w-4" />
    </div>
  );
};

export default CommentItem;
