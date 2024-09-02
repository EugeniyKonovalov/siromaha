import Ad from "../ad";
import Birthdays from "./birthdays";
import FriendRequests from "./friendRequests";
import UserInfo from "./userInfo";
import UserMedia from "./userMedia";

const RightMenu = ({ userId }: { userId?: string | number }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfo userId={userId} />
          <UserMedia userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad />
    </div>
  );
};

export default RightMenu;
