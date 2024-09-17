import Card from "@/components/shared/Card";
import Link from "next/link";
import FriendRequestsItem from "./FriendRequestsItem";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import FriendRequestsList from "./FriendRequestsList";

const FriendRequests = async () => {
  const { userId } = auth();

  if (!userId) return;

  const requests = await prisma.follow.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  if (!requests?.length) return;

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">Friend Requests</span>
        <Link href={"/"} className="text-sky-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      <FriendRequestsList requests={requests} />
    </Card>
  );
};

export default FriendRequests;
