import Card from "@/components/shared/Card";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Post from "./post";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();

  let posts: any[] = [];

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: { username: username },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: { select: { comments: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  if (!username && userId) {
    const following = await prisma.follower.findMany({
      select: {
        followingId: true,
      },
    });
    const followingIds = following.map((f) => f.followingId);

    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: { select: { comments: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {posts?.length ? (
        posts?.map((post) => <Post key={post?.id} post={post} />)
      ) : (
        <p className="text-center">No post found!</p>
      )}
    </div>
  );
};

export default Feed;
