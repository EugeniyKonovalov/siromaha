import Image from "next/image";

const AddComment = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={"/pexels-huy-nguy-n-7.jpg"}
        alt="user avatar"
        width={32}
        height={32}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex items-center justify-between w-full bg-slate-200 rounded-xl p-2">
        <input
          type="text"
          placeholder="Write a comment..."
          className="bg-transparent outline-none w-full "
        />
        <Image
          src={"/emoji.png"}
          alt="Emoji"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AddComment;
