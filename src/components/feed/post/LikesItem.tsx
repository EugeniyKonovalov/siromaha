"use client";

import Button from "@/components/shared/Button";
import { switchLikes } from "@/lib/actions/post";
import { PostType } from "@/types/post";
import { useAuth } from "@clerk/nextjs";
import { useOptimistic, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const LikesItem = ({ post }: { post: PostType }) => {
  const { isLoaded, userId } = useAuth();
  const likedUserIds = post.likes?.map((user) => user?.userId);

  const [likesState, setlikesState] = useState({
    likesCount: likedUserIds?.length,
    isLiked: userId ? likedUserIds?.includes(userId) : false,
  });

  const [optimisticLikesState, switchOptimisticLike] = useOptimistic(
    likesState,
    (state, value) => {
      return {
        likesCount: state.isLiked ? state.likesCount - 1 : state.likesCount + 1,
        isLiked: !state?.isLiked,
      };
    }
  );

  const likesAction = async () => {
    switchOptimisticLike("");

    try {
      switchLikes(post?.id);
      setlikesState((state) => {
        return {
          likesCount: state.isLiked
            ? state.likesCount - 1
            : state.likesCount + 1,
          isLiked: !state?.isLiked,
        };
      });
    } catch (error) {}
  };

  return (
    <div className="flex items-center gap-2 bg-slate-700 p-2 rounded-lg">
      <form action={likesAction}>
        <Button type="submit" className="bg-transparent px-0">
          {optimisticLikesState.isLiked ? (
            <AiFillLike size={20} className="cursor-pointer fill-sky-600" />
          ) : (
            <AiOutlineLike size={20} className="cursor-pointer fill-sky-600" />
          )}
        </Button>
      </form>
      <span className="text-gray-400">|</span>
      <span className="text-md">
        {optimisticLikesState?.likesCount
          ? optimisticLikesState?.likesCount
          : null}{" "}
        <span className="hidden sm:inline">
          {optimisticLikesState?.likesCount === 0
            ? "No Likes"
            : optimisticLikesState?.likesCount === 1
            ? "Like"
            : "Likes"}
        </span>
      </span>
    </div>
  );
};

export default LikesItem;
