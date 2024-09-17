import prisma from "@/lib/client";
import Feed from "../feed";
import LeftMenu from "../leftMenu";
import RightMenu from "../rightMenu";
import ProfileInfo from "./ProfileInfo";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const Profile = async ({ params }: { params: { username: string } }) => {
  const user = await prisma.user.findFirst({
    where: {
      username: params?.username,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        },
      },
    },
  });

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockedId: user?.id,
        blockerId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <section className="flex gap-6 pt-6">
      <div className="hidden lg:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 ">
          <ProfileInfo user={user} />
          <Feed username={params?.username} />
        </div>
      </div>
      <aside className="hidden xl:block w-[30%]">
        <RightMenu user={user} />
      </aside>
    </section>
  );
};

export default Profile;
