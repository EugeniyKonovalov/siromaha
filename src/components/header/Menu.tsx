"use client";

import { FaHome, FaUserFriends } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { MdOutlineAutoStories } from "react-icons/md";

const Menu = () => {
  return (
    <nav className="flex gap-6 text-gray-300">
      <MenuItem href={"/"} name="Home" Icon={FaHome} />
      <MenuItem href={"/"} name="Friends" Icon={FaUserFriends} />
      <MenuItem href={"/"} name="Stories" Icon={MdOutlineAutoStories} />
    </nav>
  );
};

export default Menu;
