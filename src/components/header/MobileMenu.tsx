"use client";

import useDisclosure from "@/hooks/useDisclosure";
import { cn } from "@/lib/utils";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaObjectGroup, FaUserFriends } from "react-icons/fa";
import { MdOutlineAutoStories } from "react-icons/md";
import MenuItem from "./MenuItem";

const MobileMenu = () => {
  const { onToggle, isOpen } = useDisclosure();
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={onToggle}
      >
        <div
          className={cn(
            "w-6 h-1 bg-sky-600 rounded-sm origin-left ease-in-out duration-700",
            {
              "rotate-45": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "w-6 h-1 bg-sky-600 rounded-sm ease-in-out duration-700",
            {
              "opacity-0": isOpen,
            }
          )}
        ></div>
        <div
          className={cn(
            "w-6 h-1 bg-sky-600 rounded-sm origin-left ease-in-out duration-700",
            {
              "-rotate-45": isOpen,
            }
          )}
        ></div>
      </div>

      <div
        className={cn(
          "absolute left-0 top-24 w-full h-[calc(100dvh-96px)] bg-slate-900 flex flex-col items-center justify-center gap-8 font-medium text-xl z-50 scale-0 ease-in-out duration-700 origin-top-left opacity-0",
          { "scale-100": isOpen },
          { "opacity-100": isOpen }
        )}
      >
        <nav className="flex flex-col gap-y-8">
          <MenuItem href="/" name="Home" Icon={FaHome} />
          <MenuItem href="/" name="Friends" Icon={FaUserFriends} />
          <MenuItem href="/" name="Groups" Icon={FaObjectGroup} />
          <MenuItem href="/" name="Stories" Icon={MdOutlineAutoStories} />
          <MenuItem href="/profile" name="Profile" Icon={CgProfile} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
