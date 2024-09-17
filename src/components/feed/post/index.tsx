import { PostType } from "@/types/post";
import Image from "next/image";
import Comments from "./comments";
import PostHeader from "./PostHeader";
import PostInteraction from "./PostInteraction";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-col gap-4">
      <PostHeader
        userAvatar={post?.user.avatar || "noAvatar.png"}
        username={
          post?.user?.name && post?.user?.surename
            ? `${post?.user?.name} ${post?.user?.surename}`
            : post?.user?.username
        }
      />
      <div className="flex flex-col gap-4">
        {post?.img ? (
          <div className="flex w-full min-h-80  md:min-h-96 relative">
            <Image
              src={post.img}
              alt="post image"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ) : null}
        <p className="text-md">{post?.desc}</p>
      </div>
      <PostInteraction post={post} />
      <Comments />
    </div>
  );
};

export default Post;
