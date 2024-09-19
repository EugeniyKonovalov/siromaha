import Image from "next/image";
import Button from "../shared/Button";
import { IoMdAdd } from "react-icons/io";

const AddStories = ({
  open,
  imgUrl,
  isSelectImg,
  action,
}: {
  open: () => void;
  imgUrl: string;
  isSelectImg: Boolean;
  action: () => Promise<void>;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative cursor-pointer flex items-center justify-center"
        onClick={() => open()}
      >
        <Image
          src={imgUrl}
          alt={`user avatar`}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover ring-1"
        />
        {!isSelectImg ? (
          <IoMdAdd className="absolute fill-sky-300" size={25} />
        ) : null}
      </div>
      {isSelectImg ? (
        <form action={action}>
          <Button type="submit" className="py-2 px-4">
            Send
          </Button>
        </form>
      ) : (
        <>
          <span className="font-medium">{"Add a Story"}</span>
        </>
      )}
    </div>
  );
};

export default AddStories;
