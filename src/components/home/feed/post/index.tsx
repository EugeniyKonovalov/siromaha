import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import Comments from "./comments";
import PostFooterItem from "./PostFooterItem";
import PostHeader from "./PostHeader";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <PostHeader userAvatar="/pexels-photo-2.jpeg" userName="John Snow" />
      <div className="flex flex-col gap-4">
        <div className="flex w-full min-h-96 relative">
          <Image
            src={"/pexels-lopes-eduardo-4.jpg"}
            alt="post image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          sequi nihil voluptates aliquam, in ducimus enim ipsa! Quis odit quam
          optio excepturi? Voluptate eum, ab culpa mollitia earum atque quos?
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex justify-between w-full gap-8">
          <div className="flex gap-4">
            <PostFooterItem Icon={AiOutlineLike} count={123} title="Likes" />
            <PostFooterItem
              Icon={BiCommentDetail}
              count={23}
              title="Comments"
            />
          </div>
          <PostFooterItem Icon={PiShareFat} count={234} title="Shares" />
        </div>
        <div className="flex"> </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
