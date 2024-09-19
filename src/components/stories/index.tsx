import Card from "@/components/shared/Card";
import StoriesItem from "./StoriesItem";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import StoriesList from "./StoriesList";

const Stories = async () => {
  const { userId } = auth();

  if (!userId) return;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(Date.now()),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followingId: userId,
              },
            },
          },
        },
        {
          userId,
        },
      ],
    },
    include: {
      user: true,
    },
  });

  return (
    <Card>
      <div className="overflow-auto text-sm w-full scrollbar-hide">
        <StoriesList stories={stories} userId={userId} />
      </div>
    </Card>
  );
};

export default Stories;
