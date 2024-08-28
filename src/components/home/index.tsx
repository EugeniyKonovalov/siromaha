import AddPost from "./addPost";
import Feed from "./feed";
import Stories from "./stories";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <Stories />
      <AddPost />
      <Feed />
    </div>
  );
};

export default Home;
