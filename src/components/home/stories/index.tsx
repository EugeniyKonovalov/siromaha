import Card from "@/components/shared/Card";
import StoriesItem from "./StoriesItem";

const Stories = () => {
  return (
    <Card>
      <div className="overflow-auto text-sm w-full scrollbar-hide">
        <div className="flex gap-8 w-max">
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
          <StoriesItem imgUrl={"/pexels-photo-27244378.jpeg"} name="Tiny" />
        </div>
      </div>
    </Card>
  );
};

export default Stories;
