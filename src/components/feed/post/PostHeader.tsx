import MoreBtn from "@/components/shared/MoreBtn";
import Image from "next/image";
import Link from "next/link";

const PostHeader = ({
  username,
  userAvatar,
  postId,
}: {
  userAvatar: string;
  username: string;
  postId?: string | number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <Link href={`/profile/${username}`}>
        <div className="flex items-center gap-4">
          <Image
            src={userAvatar}
            width={40}
            height={40}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{username}</span>
        </div>
      </Link>
      <MoreBtn size={20} />
    </div>
  );
};

export default PostHeader;
