"use client";

import { CommentType } from "@/types/post";
import CommentItem from "./CommentItem";
import { memo, useOptimistic, useState } from "react";
import AddComment from "./AddComment";
import { useUser } from "@clerk/nextjs";
import { addComment } from "@/lib/actions/comment";

const CommentList = ({
  comments,
  postId,
}: {
  comments: CommentType[];
  postId: number;
}) => {
  const { user } = useUser();
  const [commentsState, setCommentsState] = useState<CommentType[]>(comments);

  const [optimisticComments, addOptimistcComment] = useOptimistic(
    commentsState,
    (state, value: CommentType) => [value, ...state]
  );

  const addCommentAction = async (formData: FormData) => {
    const desc = formData.get("comment") as string;
    if (!user || !desc) return;
    addOptimistcComment({
      id: Math.random(),
      desc,
      createdAt: new Date(),
      updateAt: new Date(),
      userId: user?.id,
      postId,
      user: {
        id: user?.id,
        username: "Sending, please wait...",
        avatar: user?.imageUrl,
        name: "",
        surename: "",
        createdAt: new Date(),
      },
    });

    try {
      const createdComment = await addComment(postId, desc);
      setCommentsState((prev) => [createdComment, ...prev]);
    } catch (error) {}
  };

  return (
    <>
      {user ? <AddComment addCommentAction={addCommentAction} /> : null}
      <div className="flex flex-col gap-8">
        {optimisticComments?.map((comment) => (
          <CommentItem key={comment?.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default memo(CommentList);
