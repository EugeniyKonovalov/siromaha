import Image from "next/image";
import Link from "next/link";
import PostActionMenu from "./PostActionMenu";
import { auth } from "@clerk/nextjs/server";

const PostHeader = ({
  username,
  userAvatar,
  postId,
  postUserId,
}: {
  userAvatar: string;
  username: string;
  postId: number;
  postUserId: string;
}) => {
  const { userId } = auth();

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
      {userId === postUserId ? <PostActionMenu postId={postId} /> : null}
    </div>
  );
};

export default PostHeader;
