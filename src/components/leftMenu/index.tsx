import Ad from "../ad";
import MenuList from "./menuList";
import ProfileCard from "./ProfileCard";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" ? <ProfileCard /> : null}
      <MenuList />
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
