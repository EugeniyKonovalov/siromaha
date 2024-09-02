import LeftMenu from "../leftMenu";
import RightMenu from "../rightMenu";
import AddPost from "./addPost";
import Feed from "../feed";
import Stories from "./stories";

const Home = () => {
  return (
    <section className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 ">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <aside className="hidden lg:block w-[30%]">
        <RightMenu />
      </aside>
    </section>
  );
};

export default Home;
