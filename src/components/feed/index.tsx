import Card from "@/components/ui/Card";
import Post from "./post";

const Feed = () => {
  return (
    <Card>
      <div className="flex flex-col gap-12">
        <Post />
        <Post />
      </div>
    </Card>
  );
};

export default Feed;
