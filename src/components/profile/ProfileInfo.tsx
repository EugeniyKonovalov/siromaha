import Image from "next/image";
import ProfileAnaliticsItem from "./ProfileAnaliticsItem";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-64 relative">
        <Image
          src={"/pexels-alex-nguyen.jpg"}
          alt="background image"
          fill
          className="object-cover rounded-md"
        />
        <Image
          src={"/pexels-polina.jpg"}
          alt="background image"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto object-cover -bottom-16 ring-4 ring-sky-500"
        />
      </div>
      <h1 className="mt-20 mb-4 text-2xl font-medium">Tinichka Konovalova</h1>
      <div className="flex items-center justify-center gap-12 mb-4">
        <ProfileAnaliticsItem title="Posts" count={"123"} />
        <ProfileAnaliticsItem title="Followers" count={"121.3K"} />
        <ProfileAnaliticsItem title="Following" count={"134.5k"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
