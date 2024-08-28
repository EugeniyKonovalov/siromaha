import Image from "next/image";

const AddPostInput = () => {
  return (
    <div className="flex gap-4 flex-1">
      <textarea
        placeholder="What`s on your mind"
        className="bg-slate-200 rounded-lg w-full p-2"
      ></textarea>
      <Image
        src={"/emoji.png"}
        alt="emoji"
        width={20}
        height={20}
        className="w-5 h-5 cursor-pointer self-end"
      />
    </div>
  );
};

export default AddPostInput;
