import Image from "next/image";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Link from "next/link";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const ProfileCard = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) return null;

  return (
    <Card>
      <div className="relative h-20">
        <Image
          src={user?.cover || "/noCover.jpg"}
          alt="background"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "/noAvatar.png"}
          alt="avatar"
          width={192}
          height={192}
          className="rounded-full object-cover w-12 h-12 m-auto absolute left-0 right-0 -bottom-6 ring-1 ring-slate-200 z-10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold mt-6">
          {user?.name && user?.surename
            ? `${user?.name} ${user?.surename}`
            : user?.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src={"/pexels-eda-karabulut.jpg"}
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={"/pexels-eda-karabulut.jpg"}
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src={"/pexels-eda-karabulut.jpg"}
              alt="avatar"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>
          <span className="text-xs text-gray-200">
            {user?._count?.followers} Followers
          </span>
        </div>
        <Button className="p-2">
          <Link href={`/profile/${user?.username}`}>My Profile</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
