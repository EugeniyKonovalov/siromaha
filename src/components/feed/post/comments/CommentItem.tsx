import MoreBtn from "@/components/shared/MoreBtn";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";

const CommentItem = () => {
  return (
    <div className="flex items-start w-full gap-4">
      <Image
        src={"/pexels-huy-nguy-n-7.jpg"}
        alt="User Avatar"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex w-full flex-col gap-3">
        <span className="font-medium">Eddard Stark</span>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          explicabo! Fugiat illo possimus, rem mollitia nemo quia ratione soluta
          asperiores commodi dicta quidem, hic adipisci corporis cum officiis,
          dolore maxime?
        </p>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 ">
            <AiOutlineLike size={16} className="cursor-pointer text-sky-500" />
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">123 Likes</span>
          </div>
          <span className="cursor-pointer hover:underline">Reply</span>
        </div>
      </div>
      <MoreBtn size={20} className="w-4" />
    </div>
  );
};

export default CommentItem;
