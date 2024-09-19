"use client";

import Image from "next/image";
import Button from "../shared/Button";
import { useFormStatus } from "react-dom";
import { addPost } from "@/lib/actions/post";

const AddPostInput = ({ image }: { image?: string | undefined }) => {
  const { pending } = useFormStatus();

  return (
    <form
      action={(formData) => addPost(formData, image)}
      className="flex gap-4 flex-1"
    >
      <textarea
        placeholder="What`s on your mind?"
        name="desc"
        className="bg-slate-200 text-slate-800 rounded-lg w-full p-2 outline-none"
      ></textarea>
      <div className="flex flex-col gap-2">
        <Image
          src={"/emoji.png"}
          alt="emoji"
          width={20}
          height={20}
          className="w-5 h-5 cursor-pointer"
        />
        <Button className="py-2">{pending ? "Sending" : "Send"}</Button>
      </div>
    </form>
  );
};

export default AddPostInput;
