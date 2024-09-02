import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <Card>
      <div className="relative h-20">
        <Image
          src={"/pexels-alex-nguyen.jpg"}
          alt="background"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={"/pexels-polina.jpg"}
          alt="avatar"
          width={192}
          height={192}
          className="rounded-full object-cover w-12 h-12 m-auto absolute left-0 right-0 -bottom-6 ring-1 ring-slate-200 z-10"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold mt-6">Tinichka</span>
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
          <span className="text-xs text-gray-200">500 Followers</span>
        </div>
        <Button className="rounded-md text-xs bg-sky-600 p-2">
          <Link href={"/profile/1"}>My Profile</Link>
        </Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
