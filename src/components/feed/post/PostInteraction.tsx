import { PostType } from "@/types/post";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import LikesItem from "./LikesItem";
import PostInteractionItem from "./PostInteractionItem";

const PostInteraction = ({ post }: { post: PostType }) => {
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex justify-between w-full gap-8">
        <div className="flex gap-4">
          <LikesItem post={post} />
          <PostInteractionItem
            Icon={BiCommentDetail}
            count={post?._count?.comments}
            title="Comments"
          />
        </div>
        <PostInteractionItem Icon={PiShareFat} title="Share" />
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default PostInteraction;
