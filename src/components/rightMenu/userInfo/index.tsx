import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import prisma from "@/lib/client";
import { UserTypes } from "@/types/user";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaLink,
  FaMapMarkedAlt,
  FaUniversity,
} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

const UserInfo = async ({ user }: { user: UserTypes }) => {
  const formattedDate = new Date(user?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user?.id,
      },
    });
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followerRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user?.id,
      },
    });
    followerRes ? (isFollowing = true) : (isFollowing = false);

    const followRes = await prisma.follow.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user?.id,
      },
    });
    followRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">User Information</span>
        {currentUserId === user?.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href={"/"} className="text-sky-500 text-xs hover:underline">
            See all
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-xl text-white">
            {user?.name && user?.surename
              ? `${user?.name} ${user?.surename}`
              : user?.username}
          </span>
          <span className="text-sm">@{user?.username}</span>
        </div>
        {user?.description ? <p>{user?.description}</p> : null}
        {user?.city ? (
          <div className="flex gap-2 items-center">
            <FaMapMarkedAlt size={16} className="text-sky-500" />
            <span>
              Living in <b>{user?.city}</b>
            </span>
          </div>
        ) : null}

        {user?.school ? (
          <div className="flex gap-2 items-center">
            <FaUniversity size={16} className="text-sky-500" />
            <span>
              Went to <b>{user?.school}</b>
            </span>
          </div>
        ) : null}
        {user?.work ? (
          <div className="flex gap-2 items-center">
            <MdHomeWork size={16} className="text-sky-500" />
            <span>
              Work at <b>{user?.work}</b>
            </span>
          </div>
        ) : null}
        <div className="flex items-center justify-between">
          {user?.website ? (
            <div className="flex gap-1 items-center">
              <FaLink size={16} className="text-sky-500" />
              <Link href={"/"} className="text-sky-300 font-medium">
                {user?.website}
              </Link>
            </div>
          ) : null}
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={16} className="text-sky-500" />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
      </div>
      {currentUserId && currentUserId !== user?.id ? (
        <UserInfoCardInteraction
          userId={user?.id}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      ) : null}
    </Card>
  );
};

export default UserInfo;
