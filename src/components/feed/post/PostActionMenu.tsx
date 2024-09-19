"use client";

import Button from "@/components/shared/Button";
import MoreBtn from "@/components/shared/MoreBtn";
import useDisclosure from "@/hooks/useDisclosure";
import { deletePost } from "@/lib/actions/post";
import { useEffect, useRef } from "react";

const PostActionMenu = ({ postId }: { postId: number }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const menuRef = useRef<HTMLDivElement>(null);

  const onDeletePost = deletePost.bind(null, postId);

  const outHandler = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", outHandler, true);
  }, []);

  return (
    <div className="relative">
      <MoreBtn size={20} handler={onToggle} />
      {isOpen ? (
        <div
          ref={menuRef}
          className="flex flex-col gap-2 w-24 absolute right-0 rounded-md z-20 p-3 bg-slate-500"
        >
          <span className="text-sm text-gray-400 cursor-pointer hover:text-white">
            View
          </span>
          <span className="text-sm text-gray-400 cursor-pointer hover:text-white">
            Repost
          </span>
          <form action={onDeletePost}>
            <Button className="bg-transparent p-0 text-sm text-red-400">
              Delete
            </Button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default PostActionMenu;
