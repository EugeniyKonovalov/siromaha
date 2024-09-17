"use client";

import Button from "@/components/shared/Button";
import { switchBlock } from "@/lib/actions/block";
import { switchFollow } from "@/lib/actions/follow";

import { useOptimistic, useState } from "react";

const UserInfoCardInteraction = ({
  userId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingSent: isFollowingSent,
  });

  const [optimisticState, switchOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") =>
      value === "follow"
        ? {
            ...state,
            following: state?.following && false,
            followingSent:
              !state?.following && !state.followingSent ? true : false,
          }
        : {
            ...state,
            blocked: !state?.blocked,
          }
  );

  const block = async () => {
    switchOptimisticState("block");
    try {
      switchBlock(userId);
      setUserState((prev) => ({
        ...prev,
        blocked: !prev?.blocked,
      }));
    } catch (error) {}
  };

  const follow = async () => {
    switchOptimisticState("follow");
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev?.following && false,
        followingSent: !prev?.following && !prev.followingSent ? true : false,
      }));
    } catch (error) {}
  };

  return (
    <>
      <form action={follow}>
        <Button className="w-full p-2">
          {optimisticState.following
            ? "UnFollow"
            : optimisticState.followingSent
            ? "Friend Request Sent"
            : "Follow"}
        </Button>
      </form>
      <form action={block} className="self-end">
        <Button className="bg-transparent text-red-500  text-xs cursor-pointer">
          {optimisticState.blocked ? "Unblock User" : "Block User"}
        </Button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
