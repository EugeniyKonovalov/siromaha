"use client";

import Input from "@/components/shared/Input";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

const AddComment = ({
  addCommentAction,
}: {
  addCommentAction: (value: string) => Promise<void>;
}) => {
  const [newComment, setNewComment] = useState<string>("");
  const { user } = useUser();

  const addComment = () => {
    addCommentAction(newComment);
    setNewComment("");
  };

  return (
    <div className="flex items-center gap-4">
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="user avatar"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full"
      />
      <form
        action={addComment}
        className="flex items-center justify-between w-full bg-white rounded-xl px-2"
      >
        <Input
          input={{
            type: "text",
            placeholder: "Write a comment...",
            onChange: (e) => setNewComment(e.target.value),
            value: newComment || "",
          }}
          className="bg-transparent outline-none w-full ring-0"
          mainClassName="w-full"
        />

        <Image
          src={"/emoji.png"}
          alt="Emoji"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddComment;
