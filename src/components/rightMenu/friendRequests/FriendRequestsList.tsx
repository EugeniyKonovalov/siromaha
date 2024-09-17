"use client";

import { UserFriendRequest } from "@/types/user";
import { useOptimistic, useState } from "react";
import FriendRequestsItem from "./FriendRequestsItem";
import { useRouter } from "next/navigation";
import { followRequest } from "@/lib/actions/follow";

const FriendRequestsList = ({
  requests,
}: {
  requests: UserFriendRequest[];
}) => {
  const [requestState, setRequestState] = useState(requests);
  const router = useRouter();
  const [optimisticRequests, removeOptimisticrequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req?.id !== value)
  );

  const follow = async (
    reqId: number,
    userId: string,
    type: "accept" | "decline"
  ) => {
    removeOptimisticrequest(reqId);
    try {
      await followRequest(userId, type);
      setRequestState((prev) => prev?.filter((req) => req?.id !== reqId));
      router.refresh();
    } catch (error) {}
  };

  return (
    <>
      {optimisticRequests?.map((request) => (
        <FriendRequestsItem
          key={request.id}
          request={request}
          action={follow}
        />
      ))}
    </>
  );
};

export default FriendRequestsList;
