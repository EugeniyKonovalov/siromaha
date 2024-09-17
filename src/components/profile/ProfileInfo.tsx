import Image from "next/image";
import ProfileAnaliticsItem from "./ProfileAnaliticsItem";
import { UserTypes } from "@/types/user";

const ProfileInfo = ({ user }: { user: UserTypes }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-64 relative">
        <Image
          src={user?.cover || "/noCover.jpg"}
          alt="background image"
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={user?.avatar || "/noAvatar.png"}
          alt="background image"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto object-cover -bottom-16 ring-4 ring-sky-500"
        />
      </div>
      <h1 className="mt-20 mb-4 text-2xl font-medium">
        {user?.name && user?.surename
          ? `${user?.name} ${user?.surename}`
          : user?.username}
      </h1>
      <div className="flex items-center justify-center gap-12 mb-4">
        <ProfileAnaliticsItem title="Posts" count={user?._count?.posts} />
        <ProfileAnaliticsItem
          title="Followers"
          count={user?._count?.followers}
        />
        <ProfileAnaliticsItem
          title="Following"
          count={user?._count?.following}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
