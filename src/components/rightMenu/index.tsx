import { UserTypes } from "@/types/user";
import Ad from "../ad";
import Birthdays from "./birthdays";
import FriendRequests from "./friendRequests";
import UserInfo from "./userInfo";
import UserMedia from "./userMedia";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: UserTypes }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback={"loading..."}>
            <UserInfo user={user} />
          </Suspense>
          <Suspense fallback={"loading..."}>
            <UserMedia user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad />
    </div>
  );
};

export default RightMenu;
