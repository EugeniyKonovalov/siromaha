import Feed from "../feed";
import LeftMenu from "../leftMenu";
import RightMenu from "../rightMenu";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ params }: { params: { id: string } }) => {
  return (
    <section className="flex gap-6 pt-6">
      <div className="hidden lg:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 ">
          <ProfileInfo />
          <Feed />
        </div>
      </div>
      <aside className="hidden xl:block w-[30%]">
        <RightMenu userId={params?.id} />
      </aside>
    </section>
  );
};

export default Profile;
