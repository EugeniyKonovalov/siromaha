import Image from "next/image";

const StoriesItem = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src={imgUrl}
        alt={`stories image by ${name}`}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-1"
      />
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default StoriesItem;
