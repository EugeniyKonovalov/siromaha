import Image from "next/image";

const PostOptionsItem = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Image src={imageUrl} alt="add photo" width={20} height={20} />
      <span className="">{name}</span>
    </div>
  );
};

export default PostOptionsItem;
