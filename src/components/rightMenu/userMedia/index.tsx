import Card from "@/components/shared/Card";
import Link from "next/link";
import UserMediaItem from "./UserMediaItem";
import { UserTypes } from "@/types/user";
import prisma from "@/lib/client";

const UserMedia = async ({ user }: { user: UserTypes }) => {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user?.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">User Media</span>
        <Link href={"/"} className="text-sky-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        {postsWithMedia?.length ? (
          postsWithMedia?.map((post) => (
            <UserMediaItem key={post?.id} imgUrl={post?.img!} />
          ))
        ) : (
          <span className="w-full text-center">No Media found!</span>
        )}
      </div>
    </Card>
  );
};

export default UserMedia;
