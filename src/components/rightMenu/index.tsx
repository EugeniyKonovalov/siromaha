import Ad from "../ad";
import Birthdays from "./birthdays";
import FriendRequests from "./friendRequests";

const RightMenu = ({ userId }: { userId?: string | number }) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ad />
    </div>
  );
};

export default RightMenu;
