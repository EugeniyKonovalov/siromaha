import MoreBtn from "@/components/ui/MoreBtn";
import Image from "next/image";

const PostHeader = ({
  userName,
  userAvatar,
  postId,
}: {
  userAvatar: string;
  userName: string;
  postId?: string | number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={userAvatar}
          width={40}
          height={40}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">{userName}</span>
      </div>
      <MoreBtn size={20} />
    </div>
  );
};

export default PostHeader;
