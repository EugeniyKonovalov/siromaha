import Card from "@/components/ui/Card";
import Image from "next/image";
import AddPostInput from "./AddPostInput";
import PostOptionsItem from "./PostOptionsItem";

const AddPost = () => {
  return (
    <Card>
      <div className="flex gap-4 justify-between text-sm">
        <Image
          src={"/pexels-photo-2.jpeg"}
          alt="avatar"
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col w-full gap-4">
          <AddPostInput />
          <div className="flex items-center flex-wrap gap-4 text-gray-400">
            <PostOptionsItem imageUrl="/addimage.png" name="Photo" />
            <PostOptionsItem imageUrl="/addvideo.png" name="Video" />
            <PostOptionsItem imageUrl="/poll.png" name="Poll" />
            <PostOptionsItem imageUrl="/addevent.png" name="Event" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddPost;
