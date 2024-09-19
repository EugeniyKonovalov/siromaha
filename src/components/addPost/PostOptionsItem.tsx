import Image from "next/image";

const PostOptionsItem = ({
  imageUrl,
  name,
  onClick,
}: {
  imageUrl: string;
  name: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <Image src={imageUrl} alt="add photo" width={20} height={20} />
      <span className="">{name}</span>
    </div>
  );
};

export default PostOptionsItem;
